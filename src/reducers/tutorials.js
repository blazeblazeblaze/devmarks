const tutorials = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TUTORIALS_SUCCESS":
      return action.tutorials;
    default:
      return state;
  }
};

export default tutorials;
