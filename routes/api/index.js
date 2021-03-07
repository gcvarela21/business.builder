const router = require("express").Router();
const itemRoutes = require("./itemAPI.js");
const itemidRoutes = require("./itemidAPI.js");
const orderRoutes = require("./patronAPI.js")

// Post routes
router.use("/item", itemRoutes);
router.use("/itemid", itemidRoutes);
router.use("/order", orderRoutes);

module.exports = router;