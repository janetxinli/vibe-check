const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const auth = require('./controllers/auth');
const vibe = require('./controllers/vibe');
const savePlaylist = require('./controllers/savePlaylist');
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// routes
app.get('/api/login', auth.login);
app.get('/api/auth', auth.access);
app.get('/api/refresh', auth.refresh);
app.get('/api/vibe', vibe);
app.post('/api/save-playlist', savePlaylist);

// invalid route requested
app.use(middleware.notFound);

// error handler
app.use(middleware.errorHandler);

module.exports = app;
