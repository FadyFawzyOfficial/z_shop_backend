const express = require("express");

const cartDS = require("../dataSource/cart");

const routers = express.Router();

routers.post("/", (request, response) => {
  const cartItem = request.body;
  console.log(cartItem);
  const itemId = cartDS.addItemToCart();
  response.status(201).location(`cart/${itemId}`).send();
});

module.exports = routers;
