const router = require("express").Router();
const itemController = require("../../controller/itemController");

router
    .route("/")
    .get(itemController.findAllItems)
    .post(itemController.createItem)
    .delete(itemController.deleteItem);

// router
//     .route("/id/:id")
//     .get(itemController.findItemById)
//     .put(itemController.updateItem)
//     .delete(itemController.removeItem);

router
    .route("/:itemCategory")
    .get(itemController.findByCategory)



module.exports = router;