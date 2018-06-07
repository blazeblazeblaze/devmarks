import * as types from "../constants/ActionTypes";
import { combineReducers } from "redux";
import tutorials from "./tutorials";
import topics, * as fromTopics from "./topics";
import filters from "./filters";
import { routerReducer } from "react-router-redux";

export const bySlug = (state, slug) => {
  return fromTopics.bySlug(state.topics, slug);
};

export const visibleTopics = (state, phrase) => {
  return fromTopics.visibleTopics(state, phrase);
};

};

const rootReducer = combineReducers({
  filters,
  topics,
  tutorials,
  router: routerReducer
});

export default rootReducer;
