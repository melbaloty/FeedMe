const User = require("../models/Users");

function savePayment(order, email) {
  const currentUser = User.findOneAndUpdate(
    { email: email, orders: { $elemMatch: { orderNum: order.orderNum } } },
    {
      $set: {
        "orders.$.address": order.address,
        "orders.$.status": "paid",
        "orders.$.payment": order.payment
      }
    },
    {new: true}
  );

  return currentUser;
}

module.exports = { savePayment };
