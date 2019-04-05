export const FETCH_CONFIG = 'FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';
export const ADD_TO_BREADCRUMB = 'ADD_TO_BREADCRUMB';
export const REMOVE_FROM_BREADCRUMB = 'REMOVE_FROM_BREADCRUMB';

const initialState = {
  config: null,
  loading: false,
  breadCrumb: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CONFIG: {
      return { ...state, loading: true };
    }
    case FETCH_CONFIG_SUCCESS: {
      return { ...state, config: action.payload, loading: false };
    }
    case ADD_TO_BREADCRUMB: {
      const storageRouter = Object.values(action.value);
      const breadCrumb = [];
      let filterRoute = '';

      action.route.split('/').forEach(function Route(route) {
        if (!route) return null;
        filterRoute = `${filterRoute}/${route}`;
        const index = storageRouter.map(r => r.route).indexOf(filterRoute);
        if (index > -1) {
          breadCrumb.push(storageRouter[index]);
        }
      });
      return { ...state, breadCrumb };
    }
    case REMOVE_FROM_BREADCRUMB: {
      const breadCrumb = state.breadCrumb.slice(0, action.index + 1);
      return { ...state, breadCrumb };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const fetchConfig = () => ({
  type: FETCH_CONFIG,
});

export const fetchConfigSuccess = payload => ({
  type: FETCH_CONFIG_SUCCESS,
  payload,
});

export const addToBreadcrumb = (value, route) => ({
  type: ADD_TO_BREADCRUMB,
  value,
  route,
});

export const removeFromBreadcrumb = index => ({
  type: REMOVE_FROM_BREADCRUMB,
  index,
});
