const router = require("express").Router();
const itemController = require("../../controller/itemController");

// Matches with "/api/item"
router
    .route("/")
    .get(itemController.findAllItems)
    .post(itemController.createItem);

// Matches with "/api/item/:id"
router
    .route("/:id")
    // .get(itemController.findById)
    .put(itemController.updateItem)
    .delete(itemController.removeItem);

router
    .route("/:itemCategory")
    .get(itemController.findByCategory)

module.exports = router;