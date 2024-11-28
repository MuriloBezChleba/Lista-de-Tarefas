const express = require('express');
const bodyParser = require('body-parser');
const tarefaRoutes = require('./routes/tarefaRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', tarefaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});