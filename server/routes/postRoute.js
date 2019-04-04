const Post = require('../controllers/PostController');

module.exports = app => {
  app
    .route('/api/v1/posts')
    .get(Post.fetchAll)
    .post(Post.create);
  app
    .route('/api/v1/posts/:id')
    .get(Post.fetchOne)
    .patch(Post.edit)
    .delete(Post.delete);
};
