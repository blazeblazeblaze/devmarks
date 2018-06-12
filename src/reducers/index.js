import { combineReducers } from "redux";
import tutorials from "./tutorials";
import topics, * as fromTopics from "./topics";
import filters from "./filters";
import { routerReducer } from "react-router-redux";

export const filteredTopics = (topicsState, phrase) =>
  fromTopics.filteredTopics(topicsState, phrase);

const rootReducer = combineReducers({
  filters,
  topics,
  tutorials,
  router: routerReducer
});

export default rootReducer;
