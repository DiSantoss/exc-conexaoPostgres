const express = require('express');
const controllers = require('../controllers/controllers');
const routes = express.Router();

routes.post('/autor', controllers.cadastrarAutor);
routes.get('/autor/:id', controllers.obterAutor);
routes.post('/autor/:id/livro', controllers.cadastrarLivroAutor)

module.exports = {
  routes
};