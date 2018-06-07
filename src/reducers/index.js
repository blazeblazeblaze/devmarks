import { combineReducers } from "redux";
import tutorials from "./tutorials";
import topics, * as fromTopics from "./topics";
import filters from "./filters";
import { routerReducer } from "react-router-redux";

export const bySlug = (state, slug) => {
  return fromTopics.bySlug(state.topics, slug);
};

export const visibleTopics = (topicsState, phrase) =>
  fromTopics.visibleTopics(topicsState, phrase);

const rootReducer = combineReducers({
  filters,
  topics,
  tutorials,
  router: routerReducer
});

export default rootReducer;
