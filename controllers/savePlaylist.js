const axios = require('axios');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const error = require('../utils/error');

const savePlaylist = async (req, res, next) => {
  const auth = req.headers['authorization'].substr(7);

  if (!auth) {
    const err = error(401, 'Missing authorization');
    next(err);
  }

  if (!req.body.tracks) {
    const err = error(400, 'Missing new playlist tracks');
    next(err);
  }

  try {
    const token = jwt.verify(auth, config.SECRET);
    const uris = req.body.tracks.map((t) => `spotify:track:${t}`);

    // get user info
    const user = await axios({
      method: 'GET',
      url: 'https://api.spotify.com/v1/me',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // create playlist
    const playlist = await axios({
      method: 'POST',
      url: `https://api.spotify.com/v1/users/${user.data.id}/playlists`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        name: req.body.name || 'vibe check playlist',
        public: true,
      },
    });

    // save tracks to playlist
    const saved = await axios({
      method: 'POST',
      url: `https://api.spotify.com/v1/playlists/${playlist.data.id}/tracks`,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        uris: uris,
      },
    });

    res.status(201).send({ url: playlist.data.external_urls.spotify });
  } catch (err) {
    next(err);
  }
};

module.exports = savePlaylist;
