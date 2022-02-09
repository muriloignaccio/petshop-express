const logDH = function(req, res, next) {
  console.log(req.url);

  next();
}

module.exports = logDH;