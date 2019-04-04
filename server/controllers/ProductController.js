const Api = require('../services/Api');
const Product = require('../models/Product');

module.exports = {
  fetchAll: async (req, res) => {
    const api = new Api(res);
    try {
      const products = await Product.find({});
      api.success({
        collection: 'products',
        data: products,
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  create: async (req, res) => {
    const api = new Api(res);
    try {
      const newPlant = await Product.create(req.body);
      api.success({
        data: newPlant,
        collection: 'products',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchOne: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Product.findOne({ _id: req.params.id });
      if (!plant) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: plant,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
  edit: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );
      if (!plant) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: plant,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
  delete: async (req, res) => {
    const api = new Api(res);
    try {
      const plant = await Product.findOneAndRemove({ _id: req.params.id });
      if (!plant) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: plant,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
};
