const bcrypt = require('bcryptjs');

module.exports = {
  ensureAuthenticated(req, res, next) {
    if (!req.user) {
      return res.redirect('/users/sign_in');
    }
    next();
  },
  comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
  },
};
