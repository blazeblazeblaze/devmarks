import { combineReducers } from "redux";
import * as types from "../constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

const defaultFilter = {
  name: {
    value: ""
  },
  category: {
    value: ""
  }
};

const topicsFilter = (state = defaultFilter, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return defaultFilter;
    case types.FILTER_TOPICS:
      return { ...state, ...action.activeFilters };
    default:
      return state;
  }
};

export default combineReducers({
  topicsFilter
});
