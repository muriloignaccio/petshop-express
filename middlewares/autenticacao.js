function autenticador(req, res, next) {
  if (!req.session.usuario) {
    return res.redirect('/login');
  }

  return next();
}

module.exports = autenticador;