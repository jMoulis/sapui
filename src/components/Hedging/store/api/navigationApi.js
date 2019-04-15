import axios from 'axios';
import {
  FETCH_NAVIGATION,
  fetchNavigationSuccess,
  fetchNavigationFailure,
} from 'components/Hedging/store/reducers/navigationReducer';
import oDataRouter from 'services/oData/oDataRouter';

export default store => next => action => {
  switch (action.type) {
    case FETCH_NAVIGATION: {
      console.log(action);
      const { url, entity } = action;
      axios(oDataRouter.navigation(url))
        .then(({ data }) => {
          store.dispatch(fetchNavigationSuccess(data));
        })
        .catch(error => {
          return store.dispatch(fetchNavigationFailure(error.response));
        });
      break;
    }
    default:
  }
  next(action);
};
