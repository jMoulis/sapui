export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

export const RESET_CATEGORY = 'RESET_CATEGORY';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

export const SET_QUERY = 'SET_QUERY';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  categories: null,
  categoryQuery: {
    loading: false,
    category: null,
    error: null,
  },
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
    case FETCH_CATEGORY: {
      return {
        ...state,
        categoryQuery: {
          loading: true,
          category: null,
          error: null,
        },
      };
    }
    case FETCH_CATEGORY_SUCCESS: {
      return {
        ...state,
        categoryQuery: {
          loading: false,
          loaded: true,
          category: action.payload,
        },
      };
    }
    case FETCH_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: true,
        category: null,
        error: action.payload,
      };
    }
    case SET_QUERY: {
      return {
        ...state,
        query: action.query,
      };
    }
    case RESET_CATEGORY: {
      return {
        ...state,
        categoryQuery: {
          category: null,
          loading: true,
          loaded: false,
          error: null,
        },
      };
    }
    case RESET_CATEGORIES: {
      return {
        ...state,
        categories: null,
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

export const fetchCategory = request => ({
  type: FETCH_CATEGORY,
  request,
});
export const fetchCategorySuccess = payload => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});
export const fetchCategoryFailure = error => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error,
});

export const resetCategory = () => ({
  type: RESET_CATEGORY,
});

export const resetCategories = () => ({
  type: RESET_CATEGORIES,
});

export const setQuery = query => ({
  type: SET_QUERY,
  query,
});

export default reducer;
