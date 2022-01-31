const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

const path = require('path');

console.log(path.resolve('uploads'))

router.get('/', adminController.index);

router.get('/servicos', adminController.buscarServicos);

router.get('/servicos/cadastrar', adminController.cadastrarServicos);

router.post('/servicos/cadastrar', adminController.store);

module.exports = router;