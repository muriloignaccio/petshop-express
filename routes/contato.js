const express = require('express');
const contatoController = require('../controllers/contatoController');
const router = express.Router();

router.get('/', contatoController.index);

module.exports = router;