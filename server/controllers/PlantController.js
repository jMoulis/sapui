const Api = require('../services/Api');
const Plant = require('../models/Plant');

module.exports = {
  fetchAll: async (req, res) => {
    const api = new Api(res);
    try {
      const plants = await Plant.find({});
      api.success({
        collection: 'plants',
        data: plants,
        navigation: 'products',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  create: async (req, res) => {
    const api = new Api(res);
    try {
      const newPlant = await Plant.create(req.body);
      api.success({
        data: newPlant,
        collection: 'plants',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchOne: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Plant.findOne({ _id: req.params.id });
      if (!plant) return api.failure({ message: 'No Plant found' }, 404);
      api.success({
        data: plant,
        collection: 'plants',
        navigation: 'products',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  edit: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Plant.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );
      if (!plant) return api.failure({ message: 'No Plant found' }, 404);
      api.success({
        data: plant,
        collection: 'plants',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  delete: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Plant.findOneAndRemove({ _id: req.params.id });
      if (!plant) return api.failure({ message: 'No Plant found' }, 404);
      api.success({
        data: plant,
        collection: 'plants',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchProducts: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Plant.findOne(
        { _id: req.params.id },
        { products: 1 },
      ).populate('products');
      if (!plant) return api.failure({ message: 'No Plant found' }, 404);
      api.success({
        data: plant.products,
        collection: 'plants',
        navigation: 'posts',
        parentId: req.params.id,
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchPosts: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Plant.findOne(
        { _id: req.params.id },
        { posts: 1 },
      ).populate('posts');
      if (!plant) return api.failure({ message: 'No Posts found' }, 404);
      api.success({
        data: plant.posts,
        collection: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
};
