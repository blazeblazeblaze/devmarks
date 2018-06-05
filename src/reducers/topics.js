import * as types from "../constants/ActionTypes";

export const bySlug = (state, slug) => {
  return state.find(item => item.slug === slug);
};

const topics = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_TOPICS_SUCCESS:
      return action.topics;
    case types.SEARCH_TOPIC:
      const searchPhrase = action.phrase.toLowerCase();

      return state.filter(
        item => item.name.toLowerCase().search(searchPhrase) !== -1
      );
    default:
      return state;
  }
};

export default topics;
