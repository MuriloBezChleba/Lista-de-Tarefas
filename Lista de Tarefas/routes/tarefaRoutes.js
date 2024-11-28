const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/', tarefaController.listar);
router.post('/adicionar', tarefaController.adicionar);
router.get('/excluir/:id', tarefaController.excluir);

module.exports = router;