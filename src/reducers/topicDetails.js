import * as types from "../constants/ActionTypes";

const topic = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TOPIC_DETAILS_REQUESTED:
      return {
        ...state,
        payload: {},
        isLoading: true,
        hasErrors: false,
        didInvalidate: false
      };
    case types.FETCH_TOPIC_DETAILS_SUCCESS:
      return {
        ...state,
        payload: action.topic,
        isLoading: false,
        hasErrors: false,
        didInvalidate: false
      };
    case types.FETCH_TOPIC_DETAILS_ERROR:
      return {
        ...state,
        payload: {},
        isLoading: false,
        hasErrors: true,
        didInvalidate: false
      };
    case types.INVALIDATE_TOPIC_DETAILS:
      return {
        ...state,
        hasErrors: false,
        didInvalidate: true
      };
    default:
      return state;
  }
};

const topicDetails = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TOPIC_DETAILS_REQUESTED:
    case types.FETCH_TOPIC_DETAILS_SUCCESS:
    case types.FETCH_TOPIC_DETAILS_ERROR:
    case types.INVALIDATE_TOPIC_DETAILS:
      return {
        ...state,
        [action.slug]: topic(state[action.slug], action)
      };
    default:
      return state;
  }
};

export default topicDetails;
