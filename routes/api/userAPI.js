const router = require("express").Router();
const userController = require("../../controller/userController");

router
    .route("/login")
    .post(userController.loginAdmin)
    .get(userController.adminCheck);

module.exports = router;