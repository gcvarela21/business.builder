const router = require("express").Router();
const userController = require("../../controller/userController");

router
    .route("/login")
    .put(userController.loginUser);

module.exports = router;