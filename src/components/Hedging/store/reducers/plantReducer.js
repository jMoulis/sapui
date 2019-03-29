export const FETCH_PLANTS = 'FETCH_PLANTS';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';

const initialState = {
  plantsQuery: {
    plants: null,
    loading: null,
    error: null,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLANTS: {
      return { ...state, plantsQuery: { ...state.plantsQuery, loading: true } };
    }
    case FETCH_PLANTS_SUCCESS: {
      return {
        ...state,
        plantsQuery: { error: null, plants: action.paylod, loading: false },
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const fetchPlants = entity => ({
  type: FETCH_PLANTS,
  entity,
});

export const fetchPlantsSuccess = payload => ({
  type: FETCH_PLANTS_SUCCESS,
  payload,
});
