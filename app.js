const express = require('express');
const app = express();

const rotaContatos = require('./routes/contatos');
app.use('/contatos', rotaContatos);

module.exports = app;