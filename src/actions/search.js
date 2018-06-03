export const SEARCH_TOPIC = "SEARCH_TOPIC";

export const searchTopic = phrase => {
  return {
    type: SEARCH_TOPIC,
    phrase: phrase
  };
};
