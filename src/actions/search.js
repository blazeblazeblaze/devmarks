import * as types from "../constants/ActionTypes";

export const searchTopic = phrase => {
  return {
    type: types.SEARCH_TOPIC,
    text: phrase
  };
};
