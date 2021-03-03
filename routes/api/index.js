const router = require("express").Router();
const itemRoutes = require("./itemAPI.js");

// Post routes
router.use("/item", itemRoutes);

module.exports = router;