import * as types from "../constants/ActionTypes";
import { combineReducers } from "redux";

export const bySlug = (state, slug) => {
  return state.find(item => item.slug === slug);
};

export const visibleTopics = (state, phrase) => {
  const searchPhrase = phrase.toLowerCase();

  return state.filter(
    item => item.name.toLowerCase().search(searchPhrase) !== -1
  );
};

const topics = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return action.topics;
    default:
      return state;
  }
};

export default topics;
