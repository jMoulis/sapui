const Api = require('../services/Api');
const Plant = require('../models/Plant');
const Post = require('../models/Post');

module.exports = {
  fetchAll: async (req, res) => {
    const api = new Api(res);
    try {
      const plants = await Plant.find({});
      api.success({
        searchedEntity: 'plants',
        data: plants,
        navigation: 'products',
        displayedEntity: 'plants',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  create: async (req, res) => {
    const api = new Api(res);
    try {
      const newPlant = await Plant.create(req.body);
      if (!newPlant) return api.failure({ message: 'No plant created' }, 422);
      api.success({
        data: newPlant,
        searchedEntity: 'plants',
        displayedEntity: 'plants',
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
        displayedEntity: 'plants',
        searchedEntity: 'plants',
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
        searchedEntity: 'plants',
        displayedEntity: 'plants',
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
        searchedEntity: 'plants',
        displayedEntity: 'plants',
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
        searchedEntity: 'plants',
        displayedEntity: 'products',
        navigation: 'posts',
        parentId: req.params.id,
        query: 'product',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchPosts: async (req, res) => {
    const api = new Api(res);
    const { id } = req.params;
    const { product } = req.query;
    try {
      const posts = await Post.find({ plant: id, product });
      if (!posts) return api.failure({ message: 'No Posts found' }, 404);
      api.success({
        data: posts,
        searchedEntity: 'posts',
        displayedEntity: 'posts',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
};
