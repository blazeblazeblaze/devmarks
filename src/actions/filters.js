import * as types from "../constants/ActionTypes";

export const filterTopics = activeFilters => {
  return {
    type: types.FILTER_TOPICS,
    activeFilters
  };
};
