const itemQueries = require('../db/queries.items.js');
const listQueries = require('../db/queries.lists.js');

module.exports = {
  // adds item
  create(req, res, next) {
    const { listId } = req.params;
    const newItem = {
      title: req.body.title,
      purchased: false,
      listId,
    };
    itemQueries.addItem(newItem, (err, item) => {
      if (err) {
        res.redirect(500, '/lists/new');
        console.log('ERROR ', err);
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  },
  editMode(req, res, next) {
    listQueries.getList(req.params.listId, (err, list) => {
      if (err || list == null) {
        res.redirect(404, '/');
      } else {
        res.render('lists/show', {
          list,
          isEditMode: true,
          itemId: req.params.itemId,
        });
      }
    });
  },
  // checkbox for when item is purchased
  update(req, res, next) {
    const { listId, itemId } = req.params;

    const fieldsToUpdate = {
      purchased: req.body.purchased === 'on',
      title: req.body.title,
    };
    itemQueries.updateItem(itemId, fieldsToUpdate, (err, item) => {
      if (err) {
        res.redirect(500, '/lists');
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  },
  destroy(req, res, next) {
    const { listId, itemId } = req.params;
    itemQueries.deleteItem(itemId, (err, deletedRecordsCount) => {
      if (err) {
        console.log('DELETE ITEM ERROR ', err);
        res.redirect(500, '/lists');
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  },
};
