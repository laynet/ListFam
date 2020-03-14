const itemQueries = require("../db/queries.items.js");

module.exports = {
  new(req, res, next) {
    res.render(
      "lists/new"
      // { listId: req.params.listId }
    );
  },
  create(req, res, next) {
    let newItem = {
      description: req.body.description
    };
    itemQueries.addItem(newItem, (err, item) => {
      console.log("CREATE ");
      if (err) {
        // res.redirect(500, "/lists/new");
        console.log("ERROR ", err);
      } else {
        res.redirect(303, "/lists/new");
      }
    });
  }
};
