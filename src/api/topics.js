import rawData from "./raw_data";

const withDelay = (callback, delay = 500) => {
  setTimeout(() => callback(), delay);
};
export const getTopic = slug => {
  return new Promise((resolve, reject) => {
    const tutorials = rawData;
    const tutorial = tutorials.find(item => item.slug === slug);
    if (tutorial !== null) {
      withDelay(() => resolve(tutorial), 500);
    } else {
      reject(tutorial);
    }
  });
};

export const getTopics = () => {
  return new Promise((resolve, reject) => {
    const tutorials = rawData;
    if (tutorials !== null) {
      withDelay(() => resolve(tutorials), 500);
    } else {
      reject(tutorials);
    }
  });
};
