const qs = require('querystring');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const error = require('../utils/error');
const generateRandomString = require('../helpers/generateRandomString');
const getExpiryTime = require('../helpers/getExpiryTime');

const STATE_KEY = 'spotify_auth_state';
const REDIRECT_URI = `${config.PUBLIC_URL}/api/auth`;

const login = async (req, res, next) => {
  const state = generateRandomString();
  res.cookie(STATE_KEY, state);

  const params = {
    response_type: 'code',
    client_id: config.CLIENT_ID,
    scope: config.SCOPE,
    redirect_uri: REDIRECT_URI,
    state,
  };

  try {
    const paramString = qs.stringify(params);
    res.redirect(`https://accounts.spotify.com/authorize?${paramString}`);
  } catch (err) {
    next(err);
  }
};

// redirect route for completion of auth
const access = async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

  if (state === null || state !== storedState || !code) {
    res.redirect(`${config.FRONTEND_URL}/auth-error`);
  }

  try {
    res.clearCookie(STATE_KEY);
    const tokenParams = {
      grant_type: 'authorization_code',
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
      state,
      code,
      redirect_uri: REDIRECT_URI,
    };

    const tokenString = qs.stringify(tokenParams);
    const spotifyAccess = await axios.post(
      'https://accounts.spotify.com/api/token',
      tokenString,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = jwt.sign(
      spotifyAccess.data.access_token,
      config.SECRET
    );
    const refreshToken = jwt.sign(
      spotifyAccess.data.refresh_token,
      config.SECRET
    );
    const expires = getExpiryTime();

    const redirectString = qs.stringify({
      accessToken,
      refreshToken,
      expires,
    });

    res.redirect(`${config.FRONTEND_URL}/callback?${redirectString}`);
  } catch (err) {
    console.log(err);
    res.redirect(`${config.FRONTEND_URL}/auth-error`);
  }
};

// refresh access token
const refresh = async (req, res, next) => {
  const refresh = req.query.refreshToken;

  if (!refresh) {
    const err = error(400, 'Refresh token required');
    next(err);
  }

  try {
    const refreshToken = jwt.verify(refresh, config.SECRET);
    const params = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: config.CLIENT_ID,
      client_secret: config.CLIENT_SECRET,
    };

    const paramString = qs.stringify(params);
    const access = await axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      data: paramString,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const expires = getExpiryTime();
    const accessToken = jwt.sign(access.data.access_token, config.SECRET);

    res.status(200).send({
      accessToken,
      expires,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  access,
  refresh,
};
