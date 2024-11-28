## Projeto MVC com Node.js, Express e EJS

Este é um sistema simples de cadastro de tarefas, desenvolvido com o padrão **MVC** (Model-View-Controller), utilizando **Node.js**, **Express** e **EJS** como motor de templates.

### Funcionalidades:
- **Listar Tarefas:** Exibe todas as tarefas cadastradas.
- **Adicionar Tarefa:** Permite incluir novas tarefas por meio de um formulário.
- **Excluir Tarefa:** Remove uma tarefa específica da lista.

### Estrutura do Projeto:
- **`models`**: Define o modelo de dados das tarefas.
- **`controllers`**: Contém a lógica de negócio e manipulação de dados.
- **`views`**: Arquivos EJS responsáveis por renderizar a interface.
- **`routes`**: Gerencia as rotas da aplicação.

### Como Rodar o Projeto:
1. Clone o repositório e navegue até a pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node app.js
   ```
4. Acesse no navegador: [http://localhost:3000](http://localhost:3000).
