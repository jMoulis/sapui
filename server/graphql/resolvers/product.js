import ProductModel from '../../models/Product';

export default {
  Query: {
    products: async (root, args) => {
      try {
        console.log(args);
        const plantID = '';
        let body = {};
        if (plantID) {
          body = {
            ...body,
            plants: { $in: [plantID] },
          };
        }
        const products = await ProductModel.find(body).populate('plants');
        if (!products) throw new Error('no products found');
        const response = products.map(product => {
          return {
            ...product._doc,
            keyQuery: 'products',
            query: `query{plantProducts(_id: "5ca46108bd719a0a750b34ef" ){_id products {_id name}}}`,
          };
        });
        return response;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    addPlant: (root, value) => {
      const newPlant = new ProductModel(value);
      return new Promise((resolve, reject) => {
        newPlant.save((err, res) => {
          return err ? reject(err) : resolve(res);
        });
      });
    },
  },
};
