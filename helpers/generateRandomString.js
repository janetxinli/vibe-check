const generateRandomString = () => {
  return Math.random().toString(36).slice(2);
};

module.exports = generateRandomString;
