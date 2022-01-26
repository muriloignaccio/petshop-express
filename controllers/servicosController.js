const servicosModel = require('../models/servicos.json');

const servicosController = {
  buscarServicos: (req, res) => {
    res.render('servicos', { servicos: servicosModel })
  }
};

module.exports = servicosController;