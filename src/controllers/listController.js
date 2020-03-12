const listQueries = require("../db/queries.lists.js");

module.exports = {
  index(req, res, next) {
    // res.render("lists");
    listQueries.getAllLists((err, lists) => {
      if (err) {
        res.redirect(500, "static/index");
      } else {
        res.render("lists/index", { lists });
      }
    });
  },
  new(req, res, next) {
    res.render("lists/new");
  },
  create(req, res, next) {
    let newList = {
      title: req.body.title
    };
    listQueries.addList(newList, (err, list) => {
      if (err) {
        res.redirect(500, "/lists/new");
      } else {
        res.redirect(303, `/lists/${list.id}`);
      }
    });
  },
  show(req, res, next) {
    listQueries.getList(req.params.id, (err, list) => {
      if (err || list == null) {
        res.redirect(404, "/");
      } else {
        res.render("lists/show", { list });
      }
    });
  }
};
