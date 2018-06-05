import rawData from "./raw_data";

export const getTopics = () => {
  return new Promise((resolve, reject) => {
    const tutorials = rawData;
    if (tutorials !== null) {
      resolve(tutorials);
    } else {
      reject(tutorials);
    }
  });
};
