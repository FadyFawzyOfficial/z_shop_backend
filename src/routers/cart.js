const express = require("express");

const cartDS = require("../dataSource/cart");

const routers = express.Router();

routers.post("/", (request, response) => {
  const cartItem = request.body;
  console.log(cartItem);
  const itemId = cartDS.addItemToCart(cartItem);
  response.status(201).location(`cart/${itemId}`).send();
});

routers.get("/", (request, response) => {
  response.status(200).json(cartDS.fetchCartItems());
});

module.exports = routers;
