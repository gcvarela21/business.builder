const router = require("express").Router();
const itemRoutes = require("./itemAPI.js");
const cartRoutes = require("./cartAPI.js")

// Post routes
router.use("/item", itemRoutes);
router.use("/cart", cartRoutes);

module.exports = router;