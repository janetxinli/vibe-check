# Vibe Check Frontend

This subdirectory holds all of the frontend code for vibe check.

## Dependencies

`@material-ui/icons`: simple svg icons

`@material-ui/core`: core Material-UI library; required to use the icons

`axios`: for making HTTP requests to the backend

`next`: web framework

`react`: frontend library for UI

`react-dom`: methods for React's interactions with the DOM

`prop-types`: validating React component props

`sass`: preprocessor for CSS styling

Within the app, I use React's Context API for state management. vibe check is hosted on Vercel.

## App Structure

`public/`: static files

`src/`: source code

- `components`: React components
- `context`: context handling
- `pages`: defines pages for the app
- `styles`: styles (SCSS modules) for pages and components

## Setup

To start the app in development mode (will be listening on port 3000):

```bash
npm run dev
```

## Future Work

- Create a demo for users without a Spotify account
- Implement testing
