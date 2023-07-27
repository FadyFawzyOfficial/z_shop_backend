const express = require("express");

const dataSource = require("../dataSource/dataSource");

const routers = express.Router();

routers.get("/", function (request, response) {
  const products = dataSource.fetchProducts();
  response.status(200).json(products);
});

routers.get("/:id", function (request, response) {
  const productId = request.params.id;
  const product = dataSource.findProductById(productId);

  if (product != undefined) response.status(200).json(product);
  else response.status(404).send();
});

module.exports = routers;
