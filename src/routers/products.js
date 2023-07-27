const express = require("express");

const productsDS = require("../dataSource/products");

const routers = express.Router();

routers.get("/", function (request, response) {
  const products = productsDS.fetchProducts();
  response.status(200).json(products);
});

routers.get("/:id", function (request, response) {
  const productId = request.params.id;
  const product = productsDS.findProductById(productId);

  if (product != undefined) response.status(200).json(product);
  else response.status(404).send();
});

module.exports = routers;
