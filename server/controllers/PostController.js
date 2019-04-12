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
        searchedEntity: 'posts',
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
        { _id: req.body.plant },
        {
          $addToSet: {
            products: newPost.product,
          },
          $push: {
            posts: newPost._id,
          },
        },
      );
      await Product.updateOne(
        { _id: req.body.product },
        {
          $addToSet: {
            plants: newPost.plant,
          },
          $push: {
            posts: newPost._id,
          },
        },
      );
      api.success({
        data: newPost,
        searchedEntity: 'posts',
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
        searchedEntity: 'posts',
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
          searchedEntity: 'posts',
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
          searchedEntity: 'posts',
        },
        204,
      );
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchByPlantAndProduct: async (req, res) => {
    const api = new Api(res);
    const { id, plantId, productId } = req.params;
    try {
      const posts = await Post.find({
        id,
        plant: plantId,
        product: productId,
      });
      api.success({
        searchedEntity: 'posts',
        data: posts,
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
};
