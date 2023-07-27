const express = require("express");

const shopsDS = require("../dataSource/shops");
const routes = express.Router();

routes.get("/", (request, response) => {
  response.json(shopsDS.retrieveShops());
});

module.exports = routes;
