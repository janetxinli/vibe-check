const axios = require('axios');

const getSongFeatures = async (song, auth) => {
  const features = await axios.get(
    `https://api.spotify.com/v1/audio-features/${song.id}`,
    {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }
  );

  return {
    valence: features.data.valence,
    energy: features.data.energy,
    danceability: features.data.danceability,
    tempo: features.data.tempo,
  };
};

module.exports = getSongFeatures;
