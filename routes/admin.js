const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// console.log(path.resolve('/uplo'))

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve('uploads'));
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.get('/', adminController.index);

router.get('/servicos', adminController.buscarServicos);

router.get('/servicos/cadastrar', adminController.cadastrarServicos);

router.post('/servicos/cadastrar', upload.single('ilustracao'), adminController.store);

router.get('/servicos/:id/editar', adminController.editarServicos);

router.put('/servicos/:id/editar', adminController.update);

module.exports = router;