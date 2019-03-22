import axios from 'axios';
import {
  FETCH_CATEGORIES,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  FETCH_CATEGORY,
  fetchCategorySuccess,
  fetchCategoryFailure,
} from 'store/reducers/categoryReducer';
import oDataRouter from 'services/oData/oDataRouter';

export default store => next => async action => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      const { request } = action;
      axios(oDataRouter.categories(request))
        .then(response => {
          store.dispatch(fetchCategoriesSuccess(response.data.value));
        })
        .catch(error => store.dispatch(fetchCategoriesFailure(error)));
      break;
    }
    case FETCH_CATEGORY: {
      const { request } = action;
      axios(oDataRouter.category(request))
        .then(async response => {
          try {
            const { data } = await axios(oDataRouter.categoryProducts(request));
            store.dispatch(
              fetchCategorySuccess({
                ...response.data,
                products: data.value,
              }),
            );
          } catch (error) {
            return store.dispatch(fetchCategoryFailure(error));
          }
        })
        .catch(error => store.dispatch(fetchCategoryFailure(error)));
      break;
    }
    default:
  }
  next(action);
};
