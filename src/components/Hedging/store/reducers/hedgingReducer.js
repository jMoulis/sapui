export const FETCH_CONFIG = 'FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'FETCH_CONFIG_SUCCESS';

const initialState = {
  config: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CONFIG: {
      return { ...state, loading: true };
    }
    case FETCH_CONFIG_SUCCESS: {
      return { ...state, config: action.payload, loading: false };
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
