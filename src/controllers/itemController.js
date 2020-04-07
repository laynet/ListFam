const itemQueries = require("../db/queries.items.js");

module.exports = {
  create(req, res, next) {
    const { listId } = req.params;
    let newItem = {
      title: req.body.title,
      purchased: false,
      listId
    };
    itemQueries.addItem(newItem, (err, item) => {
      if (err) {
        res.redirect(500, "/lists/new");
        console.log("ERROR ", err);
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  },
  update(req, res, next) {
    const { listId, itemId } = req.params;

    let fieldsToUpdate = {
      purchased: req.body.purchased === "on"
    };
    itemQueries.updateItem(itemId, fieldsToUpdate, (err, item) => {
      if (err) {
        res.redirect(500, "/lists");
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  },
  destroy(req, res, next) {
    const { listId, itemId } = req.params;
    itemQueries.deleteItem(itemId, (err, deletedRecordsCount) => {
      if (err) {
        console.log("DELETE ITEM ERROR ", err);
        res.redirect(500, "/lists");
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  }
};
