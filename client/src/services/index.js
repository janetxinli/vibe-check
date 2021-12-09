import axios from 'axios';

export const loginUrl = `${process.env.BACKEND_URL}/api/login`;

export const getSongs = async (timeframe, token) =>
  axios.get(`${process.env.BACKEND_URL}/api/vibe?timeframe=${timeframe}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getRefreshedToken = async (refreshToken) =>
  axios.get(
    `${process.env.BACKEND_URL}/api/refresh?refreshToken=${refreshToken}`
  );

export const savePlaylist = async (tracks, playlistName, token) =>
  axios.post(
    `${process.env.BACKEND_URL}/api/save-playlist`,
    {
      tracks,
      name: playlistName,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
