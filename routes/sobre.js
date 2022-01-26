const express = require('express');
const sobreController = require('../controllers/sobreController');
const router = express.Router();

router.get('/', sobreController.index);

module.exports = router;