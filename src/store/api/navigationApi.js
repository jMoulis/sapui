import axios from 'axios';
import {
  FETCH_NAVIGATION,
  fetchNavigationSuccess,
  fetchNavigationFailure,
} from 'store/reducers/navigationReducer';

export default store => next => action => {
  switch (action.type) {
    case FETCH_NAVIGATION: {
      const { query, keyQuery } = action;
      axios({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        url: '/graphql',
        data: JSON.stringify({ query }),
      })
        .then(({ data: { data, errors } }) => {
          if (errors) throw new Error('Error while Processing');
          store.dispatch(fetchNavigationSuccess(data[keyQuery]));
        })
        .catch(error => {
          return store.dispatch(fetchNavigationFailure(error.message));
        });
      break;
    }
    default:
  }
  next(action);
};
