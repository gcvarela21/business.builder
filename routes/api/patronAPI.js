const router = require("express").Router();
const patronController = require("../../controller/patronController");

router
    .route("/")
    .post(patronController.createPatron);

router
    .route("/:id")
    .get(patronController.findPatronById)
    .put(patronController.updatePatron)
    .delete(patronController.removePatron);

module.exports = router;