const { v4: uuidV4 } = require("uuid");

const orders = [];

const ordersDS = {
  createOrder: (order) => {
    orders.push((order.id = uuidV4()));
    return order.id;
  },
};

module.exports = ordersDS;
