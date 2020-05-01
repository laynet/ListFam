const staticRoutes = require('../routes/static');
const listRoutes = require('../routes/lists');
const itemRoutes = require('../routes/items');
const userRoutes = require('../routes/users');

module.exports = {
  init(app) {
    app.use(staticRoutes);
    app.use(listRoutes);
    app.use(itemRoutes);
    app.use(userRoutes);
  },
};
