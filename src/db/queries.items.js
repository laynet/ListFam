const Item = require("./models").Item;
const List = require("./models").List;

module.exports = {
  addItem(newItem, callback) {
    return Item.create(newItem)
      .then(item => {
        callback(null, item);
      })
      .catch(err => {
        callback(err);
      });
  },
  updateItem(itemId, fieldsToUpdate, callback) {
    return Item.update(fieldsToUpdate, { where: { id: itemId } })
      .then(item => {
        callback(null, item);
      })
      .catch(err => {
        callback(err);
      });
  }
};
