const Tarefa = require('../models/Tarefa');

module.exports = {
  listar: (req, res) => {
    const tarefas = Tarefa.listar();
    res.render('tarefas', { tarefas });
  },
  adicionar: (req, res) => {
    const { tarefa } = req.body;
    if (tarefa) {
      Tarefa.adicionar(tarefa);
    }
    res.redirect('/');
  },
  excluir: (req, res) => {
    const index = req.params.id;
    Tarefa.excluir(index);
    res.redirect('/');
  }
};