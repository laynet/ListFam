const { List } = require("./models/index");

module.exports = {
  getAllLists(callback) {
    return List.findAll()
      .then(lists => {
        callback(null, lists);
      })
      .catch(err => {
        callback(err);
      });
  },
  getList(id, callback) {
    return List.findByPk(id)
      .then(list => {
        callback(null, list);
      })
      .catch(err => {
        callback(err);
      });
  },
  addList(newList, callback) {
    return List.create({
      title: newList.title
    })
      .then(list => {
        callback(null, list);
      })
      .catch(err => {
        callback(err);
      });
  }
};
