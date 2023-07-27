const express = require("express");

const productsRouters = require("./routers/products");
const cartRouters = require("./routers/cart");
const ordersRouters = require("./routers/orders");

const apiServer = express();

apiServer.listen(3000, () => console.log("API Server Started"));

apiServer.get("/", function (request, response) {
  response.send("Hi, Fady. This Message from Express");
});

apiServer.use(express.json());
apiServer.use("/products", productsRouters);
apiServer.use("/cart", cartRouters);
apiServer.use("/orders", ordersRouters);
