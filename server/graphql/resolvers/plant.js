import PlantModel from '../../models/Plant';

export default {
  Query: {
    plants: async () => {
      try {
        const plants = await PlantModel.find();
        if (!plants) throw new Error('no plants found');
        const response = plants.map(plant => {
          return {
            ...plant._doc,
            keyQuery: 'products',
            query: `query{products{_id name}}`,
          };
        });
        return response;
      } catch (error) {
        return error;
      }
    },
    plantProducts: async (root, args) => {
      try {
        const plant = await PlantModel.findOne(args);
        if (!plant) throw new Error('no plant found');
        // const response = plant.map(plant => {
        //   return {
        //     ...plant._doc,
        //     query: `query{plant(${plant._id}){_id name products}}`,
        //   };
        // });
        return { ...plant._doc, keyQuery: 'plantProducts' };
      } catch (error) {
        return error;
      }
    },
    plant: (root, args) => {
      return new Promise((resolve, reject) => {
        PlantModel.findById(args).exec((err, res) => {
          return err ? reject(err) : resolve(res);
        });
      });
    },
  },
  Mutation: {
    addPlant: (root, value) => {
      const newPlant = new PlantModel(value);
      return new Promise((resolve, reject) => {
        newPlant.save((err, res) => {
          return err ? reject(err) : resolve(res);
        });
      });
    },
  },
};
