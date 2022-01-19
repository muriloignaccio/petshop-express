const express = require('express');
const petsController = require('../controllers/petsController');
const router = express.Router();

router.get('/', petsController.buscarPets);

module.exports = router;