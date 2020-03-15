const itemQueries = require("../db/queries.items.js");

module.exports = {
  create(req, res, next) {
    console.log("CREATE ITEM ran", req.body);
    let newItem = {
      description: req.body.description,
      purchased: false,
      listId: req.params.id
    };
    itemQueries.addItem(newItem, (err, item) => {
      console.log("CREATE item, NEW item", newItem, item);
      if (err) {
        res.redirect(500, "/lists/new");
        console.log("ERROR ", err);
      } else {
        res.redirect(303, `/lists/${list.id}`);
      }
    });
  }
};
