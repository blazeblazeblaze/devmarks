import { topics, tutorials, topicDetails } from "./raw_data";

const withDelay = (callback, delay = 500) =>
  setTimeout(() => callback(), delay);

const getTutorials = slug => {
  return new Promise((resolve, reject) => {
    const topicTutorials = tutorials[slug];

    if (topicTutorials) {
      withDelay(() => resolve(topicTutorials));
    } else {
      withDelay(() => reject());
    }
  });
};

const getTopicDetails = slug => {
  return new Promise((resolve, reject) => {
    const topic = topicDetails[slug];
    if (topic) {
      withDelay(() => resolve(topic));
    } else {
      withDelay(() => reject());
    }
  });
};

const getTopics = () => {
  return new Promise((resolve, reject) => {
    if (topics) {
      withDelay(() => resolve(topics));
    } else {
      withDelay(() => reject());
    }
  });
};

export default {
  getTutorials,
  getTopics,
  getTopicDetails
};
