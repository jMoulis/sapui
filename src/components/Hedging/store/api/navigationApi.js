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
      axios(oDataRouter.navigation(action.entity))
        .then(({ data: { d } }) => {
          store.dispatch(fetchNavigationSuccess(d.results));
        })
        .catch(error => store.dispatch(fetchNavigationFailure(error.response)));
      break;
    }
    default:
  }
  next(action);
};
