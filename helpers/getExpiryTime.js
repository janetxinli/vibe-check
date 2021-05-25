const getExpiryTime = () => {
  const expires = new Date();
  expires.setHours(expires.getHours() + 1);

  return expires.getTime();
};

module.exports = getExpiryTime;