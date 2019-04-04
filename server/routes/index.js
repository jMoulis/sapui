const plantRoutes = require('./plantRoute');
const productRoutes = require('./productRoute');
const postRoutes = require('./postRoute');
const config = require('../config/appConfig');

module.exports = app => {
  app.get('/api/v1/config', (req, res) => {
    res.send(config);
  });
  plantRoutes(app);
  productRoutes(app);
  postRoutes(app);
};
