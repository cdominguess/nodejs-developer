const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o servidor
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true,  useUnifiedTopology: true });

// Carrega as models da pasta via módulo require-dir, que ficará acessível para as controllers
requireDir('./src/models');

// Define que a aplicação aceitará requisições com o body JSON
app.use(express.json());

// Define a rota inicial, que poderá ser chamada via qualquer verbo
app.use('/api', require('./src/routes'));

app.listen(666);
