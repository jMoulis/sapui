const Product = require('../controllers/ProductController');

module.exports = app => {
  app
    .route('/api/v1/products')
    .get(Product.fetchAll)
    .post(Product.create);
  app
    .route('/api/v1/products/:id')
    .get(Product.fetchOne)
    .patch(Product.edit)
    .delete(Product.delete);
};
