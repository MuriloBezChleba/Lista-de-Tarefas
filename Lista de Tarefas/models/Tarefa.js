let tarefas = [];

module.exports = {
  listar: () => tarefas,
  adicionar: (tarefa) => tarefas.push(tarefa),
  excluir: (index) => tarefas.splice(index, 1)
};