import axios from 'axios';
import {
  FETCH_CATEGORIES,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  FETCH_CATEGORY_PRODUCTS,
  fetchCategoryProductsSuccess,
  fetchCategoryProductsFailure,
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
    case FETCH_CATEGORY_PRODUCTS: {
      const { request } = action;
      axios(oDataRouter.categoryProducts(request))
        .then(response => {
          store.dispatch(fetchCategoryProductsSuccess(response.data.value));
        })
        .catch(error => store.dispatch(fetchCategoryProductsFailure(error)));
      break;
    }
    default:
  }
  next(action);
};
