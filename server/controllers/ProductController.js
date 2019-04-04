const Api = require('../services/Api');
const Product = require('../models/Product');
const Plant = require('../models/Plant');

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
      const newProduct = await Product.create(req.body);
      await Plant.updateOne(
        { _id: req.body.plantID },
        {
          $push: {
            products: newProduct._id,
          },
        },
      );
      api.success({
        data: newProduct,
        collection: 'products',
      });
    } catch (error) {
      api.failure(error, 422);
    }
  },
  fetchOne: async (req, res) => {
    const api = new Api(res);
    try {
      const product = await Product.findOne({ _id: req.params.id });
      if (!product) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: product,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
  edit: async (req, res) => {
    const api = new Api(res);
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
      );
      if (!product) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: product,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
  delete: async (req, res) => {
    const api = new Api(res);
    try {
      const product = await Product.findOneAndRemove({ _id: req.params.id });
      if (!product) return api.failure({ message: 'No Product found' }, 404);
      return api.success({
        data: product,
        collection: 'products',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
};
