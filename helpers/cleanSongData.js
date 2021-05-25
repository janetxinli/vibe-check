const { v4: uuidv4 } = require('uuid');

const cleanRecentSongs = (songArray, simplified=false) => {
  const recentSongsClean = songArray.map((s) => {
    return {
      uuid: uuidv4(),
      id: simplified ? s.track.id : s.id,
      name: simplified ? s.track.name : s.name,
      artists: simplified ? s.track.artists.map((a) => a.name) : s.artists.map(a => a.name),
      album: simplified? s.track.album.name : s.album.name,
      image: simplified ? s.track.album.images[1] : s.album.images[1],
      url: simplified ? s.track.external_urls.spotify : s.external_urls.spotify,
    };
  });

  return recentSongsClean;
};

module.exports = cleanRecentSongs;
