import axios from 'axios';
import {
  FETCH_CONFIG,
  fetchConfigSuccess,
} from 'components/Hedging/store/reducers/hedgingReducer';
import oDataRouter from 'services/oData/oDataRouter';

export default store => next => action => {
  switch (action.type) {
    case FETCH_CONFIG: {
      axios(oDataRouter.config())
        .then(response => {
          store.dispatch(fetchConfigSuccess(response.data));
        })
        .catch(error => store.dispatch());
      break;
    }
    default:
  }
  next(action);
};
