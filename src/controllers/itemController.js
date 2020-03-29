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
      purchased: true // TODO: checked or unchecked?
    };
    itemQueries.updateItem(itemId, fieldsToUpdate, (err, item) => {
      // TODO: Create 'updateItem'
      console.log("UPDATE item: ", fieldsToUpdate, item, err);
      if (err) {
        res.redirect(500, "/lists");
        console.log("ERROR ", err);
      } else {
        res.redirect(303, `/lists/${listId}`);
      }
    });
  }
};
