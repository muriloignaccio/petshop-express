const servicosModel = require('../models/servicos.json');
const uuidv4 = require('uuidv4');
const fs = require('fs');
const { validationResult } = require('express-validator');
const { array } = require('../middlewares/multer');

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
    const erros = validationResult(req);

    if (!erros.isEmpty()) {
      res.render('servicosCadastro', { erros: erros.array().map(erro => erro.msg) });
    }

    const { nome, preco, descricao } = req.body;

    const servico = {
      id: uuidv4.uuid(),
      nome,
      preco,
      descricao,
      fotoURL: req.file.filename
    }

    servicosModel.push(servico);

    fs.writeFileSync(__dirname + '/../models/servicos.json', JSON.stringify(servicosModel));

    res.redirect('/admin/servicos');
  },
  editarServicos: function(req, res) {
    const { id } = req.params;

    const servico = servicosModel.find(servico => servico.id === id);

    res.render('servicosEditar', { servico });
  },
  update: function(req, res) {
    const { id } = req.params;

    const { nome, preco, descricao } = req.body;

    const servico = servicosModel.find(servico => servico.id === id);

    servico.nome = nome;
    servico.preco = preco;
    servico.descricao = descricao;

    if (req.file) {
      servico.fotoURL = req.file.filename;
    }

    fs.writeFileSync(__dirname + '/../models/servicos.json', JSON.stringify(servicosModel));

    res.redirect('/admin/servicos');
  }
};

module.exports = adminController;