import * as types from "../constants/ActionTypes";

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
    case types.FILTER_TOPICS:
      return { ...state, ...action.activeFilters };
    default:
      return state;
  }
};

export default topicsFilter;
