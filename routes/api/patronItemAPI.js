const router = require("express").Router();
const patronItemController = require("../../controller/patronItemController");

router
    .route("/")
    .post(patronItemController.createPatronItemCart);

router
    .route("/:id")
    .get(patronItemController.findPatronItemCartById)

module.exports = router;