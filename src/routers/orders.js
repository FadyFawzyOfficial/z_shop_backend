const express = require("express");
const cartDS = require("../dataSource/cart");
const ordersDs = require("../dataSource/orders");

const routes = express.Router();

routes.post("/", (request, response) => {
  const id = ordersDs.createOrder(request.body);
  cartDS.clearCart();
  response.status(201).location(`orders/${id}`).send();
});

module.exports = routes;
