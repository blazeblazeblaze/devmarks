import rawData from "../raw_data";

import { SEARCH_TOPIC } from "../actions/search";

export const bySlug = (state, slug) => {
  return state.find(item => item.slug === slug);
};

const topics = (state = rawData, action) => {
  switch (action.type) {
    case SEARCH_TOPIC:
      const searchPhrase = action.phrase.toLowerCase();

      return rawData.filter(
        item => item.name.toLowerCase().search(searchPhrase) !== -1
      );
    default:
      return state;
  }
};

export default topics;
