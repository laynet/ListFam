const express = require('express');

const router = express.Router();

const itemController = require('../controllers/itemController');

router.post('/lists/:listId/items', itemController.create);
router.post('/lists/:listId/items/:itemId/update', itemController.update);
router.post('/lists/:listId/items/:itemId/destroy', itemController.destroy);
router.get('/lists/:listId/items/:itemId/edit', itemController.editMode);

module.exports = router;
