export const FETCH_NAVIGATION = 'FETCH_NAVIGATION';
export const FETCH_NAVIGATION_SUCCESS = 'FETCH_NAVIGATION_SUCCESS';
export const FETCH_NAVIGATION_FAILURE = 'FETCH_NAVIGATION_FAILURE';

export const RESET_NAVIGATION = 'RESET_NAVIGATION';

const initialState = {
  navQuery: {
    datas: null,
    loading: null,
    error: null,
    keyQuery: null,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_NAVIGATION: {
      return {
        ...state,
        navQuery: {
          ...state.navQuery,
          loading: true,
          keyQuery: action.keyQuery,
        },
      };
    }
    case FETCH_NAVIGATION_SUCCESS: {
      return {
        ...state,
        navQuery: {
          ...state.navQuery,
          error: null,
          datas: action.payload,
          loading: false,
        },
      };
    }
    case FETCH_NAVIGATION_FAILURE: {
      return {
        ...state,
        navQuery: {
          ...state.navQuery,
          error: action.payload,
          datas: null,
          loading: false,
        },
      };
    }
    case RESET_NAVIGATION: {
      return {
        ...state,
        navQuery: {
          datas: null,
          loading: null,
          error: null,
          keyQuery: null,
        },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const fetchNavigation = ({ query, keyQuery }) => ({
  type: FETCH_NAVIGATION,
  keyQuery,
  query,
});

export const fetchNavigationSuccess = payload => ({
  type: FETCH_NAVIGATION_SUCCESS,
  payload,
});
export const fetchNavigationFailure = payload => ({
  type: FETCH_NAVIGATION_FAILURE,
  payload,
});

export const resetNavigation = () => ({
  type: RESET_NAVIGATION,
});
