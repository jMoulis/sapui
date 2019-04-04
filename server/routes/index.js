const plantRoutes = require('./plantRoute');
const Api = require('../services/Api');
const config = require('../config/appConfig');

module.exports = app => {
  app.get('/api/v1/config', (req, res, next) => {
    res.send(config);
  });
  plantRoutes(app);
};
