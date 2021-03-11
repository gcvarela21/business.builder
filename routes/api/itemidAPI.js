const router = require("express").Router();
const itemController = require("../../controller/itemController");

router
    .route("/:id")
    .get(itemController.findItemById)
    // .put(itemController.updateItem)
    .delete(itemController.removeItem);
router
    .route("/:itemName")
    .put(itemController.updateItem);


module.exports = router;