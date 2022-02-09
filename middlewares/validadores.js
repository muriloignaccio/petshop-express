const { check } = require('express-validator');

const validadores = {
  cadastroValidador: [
    check('nome').isLength({ min: 3 }).withMessage('Nome deve ter pelo menos 3 caracteres'),
    check('descricao').notEmpty().withMessage('Descriçao deve ser preenchida')
  ]
}

module.exports = validadores;