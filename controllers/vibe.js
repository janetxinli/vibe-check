const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require('../utils/config');
const cleanSongData = require('../helpers/cleanSongData');
const getSongFeatures = require('../helpers/getSongFeatures');
const getOverview = require('../helpers/getOverview');
const error = require('../utils/error');

const recent = async (req, res, next) => {
  const auth = req.headers['authorization'].substr(7);

  if (!auth) {
    const err = error(400, 'Missing authorization in request header');
    next(err);
  }

  let baseUrl;
  switch (req.query.timeframe) {
    case 'recent':
      baseUrl = 'https://api.spotify.com/v1/me/player/recently-played';
      break;
    case 'lastMonth':
      baseUrl =
        'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20';
      break;
    case 'allTime':
      baseUrl =
        'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=20';
      break;
    default:
      const err = error(400, 'Invalid value for timeframe parameter');
      next(err);
  }

  try {
    const accessToken = jwt.verify(auth, config.SECRET);
    const songs = await axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (songs.data.items.length === 0) {
      res.status(204).end();
    } else {
      const songsClean = cleanSongData(
        songs.data.items,
        req.query.timeframe === 'recent'
      );
      const songFeatures = await Promise.all(
        songsClean.map((s) => getSongFeatures(s, accessToken))
      );
      const overview = getOverview(songFeatures);
  
      res.status(200).send({ songs: songsClean, overview });
    }


  } catch (err) {
    next(err);
  }
};

module.exports = recent;
