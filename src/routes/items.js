const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/lists/:listId/new", itemController.new);
router.post("/lists/new", itemController.create);

module.exports = router;
