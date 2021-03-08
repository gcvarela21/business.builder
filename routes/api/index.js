const router = require("express").Router();
const itemRoutes = require("./itemAPI.js");
const itemidRoutes = require("./itemidAPI.js");
const patronRoutes = require("./patronAPI.js")
const patronItemRoute = require("./patronItemAPI.js")

// Post routes
router.use("/item", itemRoutes);
router.use("/itemid", itemidRoutes);
router.use("/patron", patronRoutes);
router.use("/patronItem", patronItemRoute);

module.exports = router;