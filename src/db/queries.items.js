const Item = require("./models").Item;
const List = require("./models").List;

module.exports = {
  addItem(newItem, callback) {
    return Item.create({
      description: newItem.description
    })
      .then(item => {
        callback(null, item);
      })
      .catch(err => {
        callback(err);
      });
  }
};
