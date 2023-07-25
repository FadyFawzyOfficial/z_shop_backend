const express = require('express');

const dataSource = require('../dataSource/dataSource');

const routers = express.Router();

routers.get('/', function(request, response){
    const products = dataSource.fetchProducts();
    response.status(200).json(products);
});

module.exports = routers;