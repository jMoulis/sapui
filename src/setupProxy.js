const proxy = require('http-proxy-middleware');

module.exports = function Api(app) {
  app.use(proxy('/auth', { target: 'http://localhost:5000' }));
  app.use(proxy('/api', { target: 'http://localhost:5000' }));
  app.use(proxy('/graphql', { target: 'http://localhost:5000' }));
};
