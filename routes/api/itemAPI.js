const router = require("express").Router();
const itemController = require("../../controller/itemController");

// Matches with "/api/posts"
router
    .route("/")
    .get(itemController.findAllItems)
    .post(itemController.createItem);

// Matches with "/api/books/:id"
router
    .route("/:id")
    // .get(itemController.findById)
    .put(itemController.updateItem)
    .delete(itemController.removeItem);

module.exports = router;