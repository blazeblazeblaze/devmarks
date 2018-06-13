import * as types from "../constants/ActionTypes";

const tutorial = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TUTORIALS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        hasErrors: false,
        didInvalidate: false,
        entities: []
      };
    case types.FETCH_TUTORIALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasErrors: false,
        didInvalidate: false,
        entities: action.tutorials
      };
    case types.FETCH_TUTORIALS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasErrors: true,
        didInvalidate: false,
        entities: []
      };
    case types.INVALIDATE_TUTORIALS:
      return {
        ...state,
        hasErrors: false,
        isFetching: false,
        didInvalidate: true
      };
    default:
      return {
        isLoading: false,
        hasErrors: false,
        didInvalidate: false,
        entities: []
      };
  }
};

const tutorials = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TUTORIALS_REQUESTED:
    case types.FETCH_TUTORIALS_SUCCESS:
    case types.FETCH_TUTORIALS_ERROR:
    case types.INVALIDATE_TUTORIALS:
      return {
        ...state,
        [action.slug]: tutorial(state[action.slug], action)
      };
    default:
      return state;
  }
};

export default tutorials;
