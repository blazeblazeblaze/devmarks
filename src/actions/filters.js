import * as types from "../constants/ActionTypes";

export const filterTopics = (activeFilters = {}) => ({
  type: types.FILTER_TOPICS,
  activeFilters
});
