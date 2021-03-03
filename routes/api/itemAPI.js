const router = require("express").Router();
const itemController = require("../../controller/itemController");

// Matches with "/api/posts"
router
    .route("/")
    .get(itemController.findAll)
    .post(itemController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    // .get(itemController.findById)
    .put(itemController.update)
    .delete(itemController.remove);

module.exports = router;