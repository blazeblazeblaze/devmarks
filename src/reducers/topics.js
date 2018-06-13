import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
import topicDetails from "./topicDetails";

const entities = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return action.topics;
    default:
      return state;
  }
};

const status = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        hasErrors: false,
        didInvalidate: false
      };
    case types.FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasErrors: false,
        didInvalidate: false
      };
    case types.FETCH_TOPICS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasErrors: true,
        didInvalidate: false
      };
    case types.INVALIDATE_TOPICS:
      return {
        ...state,
        hasErrors: false,
        didInvalidate: true
      };
    default:
      return state;
  }
};

export const filteredTopics = ({ entities }, { name, category }) => {
  const searchPhrase = name.value.toLowerCase();
  const searchCategory = category.value;

  return entities
    .filter(({ title }) => title.toLowerCase().search(searchPhrase) !== -1)
    .filter(
      ({ category }) => searchCategory === "" || category === searchCategory
    );
};

export default combineReducers({
  topicDetails,
  entities,
  status
});
