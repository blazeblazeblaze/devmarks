import * as types from "../constants/ActionTypes";
import { combineReducers } from "redux";
import tutorials from "./tutorials";
import topics, * as fromTopics from "./topics";
import { routerReducer } from "react-router-redux";

export const bySlug = (state, slug) => {
  return fromTopics.bySlug(state.topics, slug);
};

export const visibleTopics = (state, phrase) => {
  return fromTopics.visibleTopics(state, phrase);
};

const topicsFilter = (state = { text: "" }, action) => {
  switch (action.type) {
    case types.SEARCH_TOPIC:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  topicsFilter,
  topics,
  tutorials,
  router: routerReducer
});

export default rootReducer;
