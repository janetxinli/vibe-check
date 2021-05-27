# Vibe Check Backend

This server is live at: https://mysterious-castle-06210.herokuapp.com/

## About

vibe check is a web app that analyzes your Spotify listening history to determine your mood. It uses Spotify's Web API for user authorization (via OAuth 2.0) and to get the list of tracks in a user's recent listening history or their top played tracks.

Some number crunching is done on the audio features in this list of tracks in order to determine the user's mood. vibe check can also save these tracks to a new public playlist.

This project was a fun way for me to practice my Javascript skills. I learned a lot about OAuth 2.0 and server-side programming.

## Technologies

vibe check's backend is built with `Express.js`, a `Node.js` web application framework.

Some major dependencies include `axios`, `cookie-parser`, and `jsonwebtoken`.

## Setup

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
