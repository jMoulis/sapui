import axios from 'axios';
import {
  CREATE_PLANT,
  createPlantSuccess,
  createPlantFailure,
} from 'components/Hedging/store/reducers/plantReducer';
import plantApiRoute from './plantApiRoute';

export default store => next => action => {
  switch (action.type) {
    case CREATE_PLANT: {
      axios({ ...plantApiRoute.createPlant(action.values) })
        .then(response => {
          store.dispatch(createPlantSuccess(response.data));
        })
        .catch(error => {
          if (!error.response) {
            return store.dispatch(createPlantFailure(error.message));
          }
          if (error.response.status === 504) {
            return store.dispatch(
              createPlantFailure(
                'Serveur indisponible. Veuillez contacter le service client',
              ),
            );
          }
          return store.dispatch(createPlantFailure(error.response.data));
        });
      break;
    }
    default:
  }
  next(action);
};
