const router = require("express").Router();
const cartController = require("../../controller/cartController");

// Matches with "/api/item"
router
    .route("/")
    .post(cartController.createCart);

// Matches with "/api/item/:id"
router
    .route("/:id")
    .get(cartController.findCartById)
    .put(cartController.updateCart)
    .delete(cartController.removeCart);

module.exports = router;