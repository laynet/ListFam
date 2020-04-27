const staticRoutes = require('../routes/static');
const listRoutes = require('../routes/lists');
const itemRoutes = require('../routes/items');

module.exports = {
  init(app) {
    app.use(staticRoutes);
    app.use(listRoutes);
    app.use(itemRoutes);
  },
};
