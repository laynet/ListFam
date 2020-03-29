const { List, Item } = require("./models/index");
// const Item = require("./models/item");

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
    return List.findByPk(id, {
      include: [
        {
          model: Item,
          as: "items"
        }
      ]
    })
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
