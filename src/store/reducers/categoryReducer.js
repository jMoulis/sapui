export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_CATEGORY_PRODUCTS = 'FETCH_CATEGORY_PRODUCTS';
export const FETCH_CATEGORY_PRODUCTS_SUCCESS =
  'FETCH_CATEGORY_PRODUCTS_SUCCESS';
export const FETCH_CATEGORY_PRODUCTS_FAILURE =
  'FETCH_CATEGORY_PRODUCTS_FAILURE';

export const SET_QUERY = 'SET_QUERY';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  categories: null,
  products: null,
  query: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: action.payload,
      };
    }
    case FETCH_CATEGORIES_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: true,
        categories: null,
      };
    }
    case FETCH_CATEGORY_PRODUCTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_CATEGORY_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: action.payload,
      };
    }
    case FETCH_CATEGORY_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: true,
        products: null,
      };
    }
    case SET_QUERY: {
      return {
        ...state,
        query: action.query,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const fetchCategories = request => ({
  type: FETCH_CATEGORIES,
  request,
});
export const fetchCategoriesSuccess = payload => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});
export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchCategoryProducts = request => ({
  type: FETCH_CATEGORY_PRODUCTS,
  request,
});
export const fetchCategoryProductsSuccess = payload => ({
  type: FETCH_CATEGORY_PRODUCTS_SUCCESS,
  payload,
});
export const fetchCategoryProductsFailure = error => ({
  type: FETCH_CATEGORY_PRODUCTS_FAILURE,
  payload: error,
});

export const setQuery = query => ({
  type: SET_QUERY,
  query,
});

export default reducer;
