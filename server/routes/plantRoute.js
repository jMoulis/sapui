const Plant = require('../controllers/PlantController');

module.exports = app => {
  app
    .route('/api/v1/plants')
    .get(Plant.fetchAll)
    .post(Plant.create);
  app
    .route('/api/v1/plants/:id')
    .patch(Plant.edit)
    .get(Plant.fetchOne)
    .delete(Plant.delete);
};
