# Vibe Check Backend

This server is hosted by Heroku, and is live at: https://mysterious-castle-06210.herokuapp.com/

## About

vibe check is a web app that analyzes your Spotify listening history to determine your mood. It uses Spotify's Web API for user authorization (via OAuth 2.0) and to get the list of tracks in a user's recent listening history or their top played tracks.

Some number crunching is done on the audio features in this list of tracks in order to determine the user's mood. vibe check can also save these tracks to a new public playlist.

This project was a fun way for me to practice my Javascript skills. I learned a lot about OAuth 2.0 and server-side programming. The frontend of this app is implemented in `Next.js` and can be found [here](https://github.com/janetxinli/vibe-check-frontend).

## Dependencies

- `axios` - making requests to Spotify's web API
- `cookie-parser` - parse the Cookie header in a request
- `cors` - enable CORS
- `dotenv` - set environment variables
- `express` - backend web framework
- `jsonwebtoken` - sign and decode access tokens before and after sending to the client
- `morgan` - request logging
- `nodemon` - run server in development mode
- `querystring` - handle and parse query strings in requests
- `uuid` - generate unique IDs for tracks

## App Structure

`index.js`: entry point for starting the server
`app.js`: defines the express server, middleware, routes and error handling
`controllers/`: logic for route handling
`helpers/`: helper functions for cleaning data
`utils/`: configuration and utility functions

## Setup

**Note**: you will need to set up your clone with [Spotify Developer](https://developer.spotify.com/dashboard/) and add your client ID/secret to a file called `.env` in the root of the project's directory in order to run this app locally. You will also need to define a port and a secret for `jsonwebtoken` in this file.

For example:

```bash
PORT=3001
SECRET="yourJWTSecret"
CLIENT_ID="yourSpotifyClientId"
CLIENT_SECRET="yourSpotifyClientSecret"
```

These environment variables are created by `dotenv` and defined in `utils/config.js`.

Once you have set up your environment, start the app:

1. Clone this repo, then install the dependencies required

```bash
git clone https://github.com/janetxinli/vibe-check-backend.git
cd vibe-check-backend && npm install
```

2. Start the server in development mode

```bash
npm run dev
```

This will run `nodemon`, which will restart the app when changes are made.

## Future Work

- Implement API tests with `supertest`
