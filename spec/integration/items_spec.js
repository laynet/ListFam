const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/lists";
const sequelize = require("../../src/db/models/index").sequelize;
const List = require("../../src/db/models").List;
const Item = require("../../src/db/models").Item;

describe("routes : items", () => {
  beforeEach(done => {
    this.list;
    this.item;

    sequelize.sync({ force: true }).then(re => {
      List.create({
        title: "enter the 36 chambers"
      }).then(list => {
        this.list = list;

        Item.create({
          description: "clan in the front",
          listId: this.list.id
        })
          .then(item => {
            this.item = item;
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
      });
    });
  });
  describe("GET /lists/:listId/new");
});
