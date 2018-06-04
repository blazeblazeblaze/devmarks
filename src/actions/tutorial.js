import { fetchTutorials } from "../lib/api";

export const getTutorials = slug => dispatch => {
  dispatch({
    type: "TUTORIALS_REQUESTED"
  });

  fetchTutorials(slug).then(data => {
    dispatch({
      type: "FETCH_TUTORIALS_SUCCESS",
      tutorials: data
    });
  });
};
