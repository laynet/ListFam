const express = require('express');

const app = express();

const appConfig = require('./config/main-config.js');
const routeConfig = require('./config/route-config.js');

app.use((err, req, res, next) => {
  // Log error message in our server's console
  console.error(err.message);
  // If err has no specified error code, set error code to 'Internal Server Error (500)'
  if (!err.statusCode) err.statusCode = 500;
  // All HTTP requests must have a response, so let's send back an error with its status code and message
  res.status(err.statusCode).send(err.message);
});

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;
