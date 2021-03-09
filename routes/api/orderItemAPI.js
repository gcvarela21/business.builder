const router = require("express").Router();
const orderItemController = require("../../controller/orderItemController");

router
    .route("/")
    .post(orderItemController.createOrderItemCart);

router
    .route("/:id")
    .get(orderItemController.findOrderItemCartById)

module.exports = router;