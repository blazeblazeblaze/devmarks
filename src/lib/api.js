import rawData from "../raw_data";

export const fetchTutorials = slug => {
  return new Promise((resolve, reject) => {
    const tutorials = rawData.find(item => item.slug === slug).items;
    if (tutorials !== null) {
      resolve(tutorials);
    } else {
      reject(tutorials);
    }
  });
};
