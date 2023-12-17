module.exports = {
  env: {
    BACKEND_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://vibe-check-server.onrender.com',
  },
};
