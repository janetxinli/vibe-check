const notFound = (req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
};

module.exports = {
  notFound,
  errorHandler,
};
