const router = require("express").Router();
const itemRoutes = require("./itemAPI.js");
const itemidRoutes = require("./itemidAPI.js");
const orderRoutes = require("./orderAPI.js")
const orderItemRoute = require("./orderItemAPI.js")

// Post routes
router.use("/item", itemRoutes);
router.use("/itemid", itemidRoutes);
router.use("/order", orderRoutes);
router.use("/orderItem", orderItemRoute);

module.exports = router;