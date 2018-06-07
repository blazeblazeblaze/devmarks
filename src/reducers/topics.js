import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";

import topicsFilter from "./topicsFilter";

const entities = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return action.topics;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case types.TOPICS_REQUESTED:
      return true;
    case types.FETCH_TOPICS_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  topicsFilter,
  isLoading
});

export const bySlug = ({ entities }, slug) => {
  return entities.find(item => item.slug === slug);
};

export const visibleTopics = ({ entities }, { name, category }) => {
  const searchPhrase = name.value.toLowerCase();
  const searchCategory = category.value;

  return entities
    .filter(({ title }) => title.toLowerCase().search(searchPhrase) !== -1)
    .filter(
      ({ category }) => searchCategory === "" || category === searchCategory
    );
};
