const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3001;
const SECRET = process.env.SECRET;

// spotify credentials
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// set public url
let PUBLIC_URL;
let FRONTEND_URL;
if (process.env.NODE_ENV === 'development') {
  PUBLIC_URL = `http://localhost:${PORT}`;
  FRONTEND_URL = 'http://localhost:3000';
} else {
  PUBLIC_URL = 'https://vibe-check-server.onrender.com';
  FRONTEND_URL = 'https://vibecheck.vercel.app';
}

const SCOPE =
  'user-read-recently-played user-top-read user-read-private playlist-modify-public';

module.exports = {
  PORT,
  SECRET,
  CLIENT_ID,
  CLIENT_SECRET,
  PUBLIC_URL,
  FRONTEND_URL,
  SCOPE,
};
