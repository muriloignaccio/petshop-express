const servicosModel = require('../models/servicos.json');
const uuidv4 = require('uuidv4');
const fs = require('fs');

const adminController = {
  index: function(req, res) {
    res.render('admin');
  }, 
  buscarServicos: function(req, res) {
    res.render('adminServicos', { servicos: servicosModel })
  },
  cadastrarServicos: function(req, res) {
    res.render('servicosCadastro')
  },
  store: function(req, res) {
    const { nome, preco, descricao } = req.body;

    const servico = {
      id: uuidv4.uuid(),
      nome,
      preco,
      descricao,
      fotoURL: ''
    }

    servicosModel.push(servico);

    fs.writeFileSync(__dirname + '/../models/servicos.json', JSON.stringify(servicosModel));

    res.redirect('/admin/servicos');
  }
};

module.exports = adminController;