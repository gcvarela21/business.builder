const router = require("express").Router();
const orderController = require("../../controller/orderController");

router
    .route("/")
    .post(orderController.createOrder);

router
    .route("/:id")
    .get(orderController.findOrderById)
    .delete(orderController.removeOrder);

module.exports = router;