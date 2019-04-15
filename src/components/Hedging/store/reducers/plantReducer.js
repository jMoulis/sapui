export const FETCH_PLANTS = 'FETCH_PLANTS';
export const FETCH_PLANTS_SUCCESS = 'FETCH_PLANTS_SUCCESS';

export const CREATE_PLANT = 'CREATE_PLANT';
export const CREATE_PLANT_SUCCESS = 'CREATE_PLANT_SUCCESS';
export const CREATE_PLANT_FAILURE = 'CREATE_PLANT_FAILURE';

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
    case CREATE_PLANT: {
      return {
        ...state,
        plantsQuery: {
          ...state.plantsQuery,
          loading: true,
        },
      };
    }
    case CREATE_PLANT_SUCCESS: {
      return {
        ...state,
        plantsQuery: {
          ...state.plantsQuery,
          plants: [...state.plantsQuery.plants, action.payload],
          loading: false,
        },
      };
    }
    case CREATE_PLANT_FAILURE: {
      return {
        ...state,
        plantsQuery: {
          ...state.plantsQuery,
          error: action.payload,
          loading: false,
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

export const createPlant = values => ({
  type: CREATE_PLANT,
  values,
});
export const createPlantSuccess = payload => ({
  type: CREATE_PLANT_SUCCESS,
  payload,
});
export const createPlantFailure = error => ({
  type: CREATE_PLANT_FAILURE,
  payload: error,
});

export const fetchPlants = entity => ({
  type: FETCH_PLANTS,
  entity,
});

export const fetchPlantsSuccess = payload => ({
  type: FETCH_PLANTS_SUCCESS,
  payload,
});
