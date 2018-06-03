import { combineReducers } from "redux";
import topics, * as fromTopics from "./topics";
import { routerReducer } from "react-router-redux";

export const bySlug = (state, slug) => {
  return fromTopics.bySlug(state.topics, slug);
};

const rootReducer = combineReducers({
  topics,
  router: routerReducer
});

export default rootReducer;
