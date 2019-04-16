import axios from 'axios';
import {
  FETCH_CONFIG,
  fetchConfigSuccess,
  fetchConfigFailure,
} from 'store/reducers/hedgingReducer';
import oDataRouter from 'services/oData/oDataRouter';

export default store => next => action => {
  switch (action.type) {
    case FETCH_CONFIG: {
      axios(oDataRouter.config())
        .then(response => {
          store.dispatch(fetchConfigSuccess(response.data));
        })
        .catch(error => {
          if (!error.response) {
            return store.dispatch(fetchConfigFailure(error.message));
          }
          if (error.response.status === 504) {
            return store.dispatch(
              fetchConfigFailure(
                'Serveur indisponible. Veuillez contacter le service client',
              ),
            );
          }
          return store.dispatch(fetchConfigFailure(error.response.data));
        });
      break;
    }
    default:
  }
  next(action);
};
