const request = require('request');
const sequelize = require('../../src/db/models/index').sequelize;
const List = require('../../src/db/models').List;
const Item = require('../../src/db/models').Item;

const base = 'http://localhost:3000/lists';

describe('routes : items', () => {
  beforeEach((done) => {
    sequelize.sync({ force: true }).then(() => {
      List.create(
        {
          title: 'enter the 36 chambers',
          items: [
            {
              title: 'clan in the front',
              listId: 1,
            },
          ],
        },
        {
          include: {
            model: Item,
            as: 'items',
          },
        },
      )
        .then((list) => {
          this.list = list;
          this.item = list.items[0];

          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });
  });

  describe('POST /lists/:listId/items/create', () => {
    it('should create a new item and redirect', (done) => {
      const options = {
        url: `${base}/${this.list.id}/items/create`,
        form: {
          title: 'watching snow melt',
        },
      };
      request.post(options, () => {
        Item.findOne({ where: { title: 'watching snow melt' } })
          .then((item) => {
            expect(item).not.toBeNull();
            expect(item.title).toBe('watching snow melt');
            expect(item.listId).not.toBeNull();
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
      });
    });
  });
});
