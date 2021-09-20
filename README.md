# Vibe Check

## About
vibe check is a web app that analyzes your Spotify listening history to determine your mood. It uses Spotify's Web API for user authorization (via OAuth 2.0) and to get the list of tracks in a user's recent listening history or their top played tracks. The frontend of this app is implemented in `Next.js`, while the backend is implemented using `Express`.

This was a fun personal project that I created in order to explore my own listening habits while improving my web dev skills. I love music and think of the songs that I listen to as the soundtrack to my life. Music is emotional -- it can completely change your mood, and how you're feeling influences what music you choose to listen to. 

This project was a fun way for me to improve my Javascript skills. I particularly wanted to learn the `Next.js` framework and start using `scss` for styling. On the backend, I learned a lot about OAuth 2.0.

The frontend is hosted on Vercel, and is live at https://vibecheck.vercel.app/

## Backend Dependencies

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

`client/`: frontend code (more info and dependencies can be found in the subdirectory's README)

## Running the app locally

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
