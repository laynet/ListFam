const itemQueries = require("../db/queries.items.js");

module.exports = {
  create(req, res, next) {
    console.log("CREATE ITEM ran", req.body.title);
    let newItem = {
      title: req.body.title,
      purchased: false,
      listId: req.params.id
    };
    itemQueries.addItem(newItem, (err, item) => {
      console.log("CREATE item, NEW item", newItem, item, err);
      if (err) {
        res.redirect(500, "/lists/new");
        console.log("ERROR ", err);
      } else {
        res.redirect(303, `/lists/${req.params.id}`);
      }
    });
  }
};
