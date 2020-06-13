const express = require('express');
const routes = express.Router();

// Instancia a controller
const ProductController = require('./controllers/ProductController');

// Cria as rotas
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;