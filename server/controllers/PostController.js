const Api = require('../services/Api');
const Post = require('../models/Post');
const Plant = require('../models/Plant');
const Product = require('../models/Product');

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
      const newPost = await Post.create(req.body);
      await Plant.updateOne(
        { _id: req.body.plantId },
        {
          $push: {
            posts: newPost._id,
          },
        },
      );
      await Product.updateOne(
        { _id: req.body.productId },
        {
          $push: {
            posts: newPost._id,
          },
        },
      );
      api.success({
        data: newPost,
        collection: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchOne: async (req, res) => {
    const api = new Api(res);
    try {
      const post = await Post.findOne({ _id: req.params.id });
      if (!post) return api.failure({ message: 'No post found' }, 404);
      api.success({
        data: post,
        collection: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  edit: async (req, res) => {
    const api = new Api(res);
    try {
      const post = await Post.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );
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
