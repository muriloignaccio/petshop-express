const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const upload = require('../middlewares/multer');
const validadores = require('../middlewares/validadores');

router.get('/', adminController.index);

router.get('/servicos', adminController.buscarServicos);

router.get('/servicos/cadastrar', adminController.cadastrarServicos);

router.post('/servicos/cadastrar', upload.single('ilustracao'), validadores.cadastroValidador, adminController.store);

router.get('/servicos/:id/editar', adminController.editarServicos);

router.put('/servicos/:id/editar', upload.single('ilustracao'), adminController.update);

module.exports = router;