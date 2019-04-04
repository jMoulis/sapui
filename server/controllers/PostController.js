const Api = require('../services/Api');
const Post = require('../models/Post');

module.exports = {
  fetchAll: async (req, res) => {
    const api = new Api(res);
    try {
      const posts = await Post.find({});
      api.success({
        collection: 'posts',
        data: posts,
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  create: async (req, res) => {
    const api = new Api(res);
    try {
      const newPlant = await Post.create(req.body);
      api.success({
        data: newPlant,
        collection: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchOne: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Post.findOne({ _id: req.params.id });
      if (!plant) return api.failure({ message: 'No post found' }, 404);
      api.success({
        data: plant,
        collection: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  edit: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );
      if (!plant) return api.failure({ message: 'No post found' }, 404);
      api.success(
        {
          data: plant,
          collection: 'posts',
        },
        204,
      );
    } catch (error) {
      api.failure(error, 422);
    }
  },
  delete: async (req, res) => {
    const api = new Api(res);
    try {
      const post = await Post.findOneAndRemove({ _id: req.params.id });
      if (!post) return api.failure({ message: 'No post found' }, 404);
      api.success(
        {
          data: post,
          collection: 'posts',
        },
        204,
      );
    } catch (error) {
      api.failure(error, 422);
    }
  },
};
