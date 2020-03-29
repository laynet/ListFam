const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

router.post("/lists/:listId/items", itemController.create);
router.post("/lists/:listId/items/:itemId", itemController.update);

module.exports = router;
