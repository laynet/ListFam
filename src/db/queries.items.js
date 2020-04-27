const Item = require('./models').Item;
const List = require('./models').List;

module.exports = {
  addItem(newItem, callback) {
    console.log('ADD ITEM RAN');
    return Item.create(newItem)
      .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        console.log('ADD ITEM ERROR ', err);
        callback(err);
      });
  },
  updateItem(itemId, fieldsToUpdate, callback) {
    console.log('UPDATE ITEM RAN');
    return Item.update(fieldsToUpdate, { where: { id: itemId } })
      .then((item) => {
        callback(null, item);
      })
      .catch((err) => {
        callback(err);
      });
  },
  deleteItem(id, callback) {
    console.log('DELETE ITEM RAN');
    return Item.destroy({ where: { id } })
      .then((deletedRecordsCount) => {
        console.log('DELETED RECORDS COUNT: ', deletedRecordsCount);
        callback(null, deletedRecordsCount);
      })
      .catch((err) => {
        console.log('DELETE ITEM QUERIES ERROR ', err);
        callback(err);
      });
  },
};
