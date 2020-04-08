const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;
const Item = require("../../src/db/models").Item;

describe("Item", () => {
  beforeEach(done => {
    this.list;
    this.item;
    sequelize.sync({ force: true }).then(res => {
      List.create({
        title: "wu-tang is for the children"
      })
        .then(list => {
          this.list = list;
          Item.create({
            title: "cash rules everything around me",
            listId: this.list.id
          }).then(item => {
            this.item = item;
            done();
          });
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
  describe("#create()", () => {
    it("should create an item object with a description and assigned list", done => {
      Item.create({
        title: "da mystery of chessboxin",
        listId: this.list.id
      })
        .then(item => {
          expect(item.title).toBe("da mystery of chessboxin");
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });
  });
});
