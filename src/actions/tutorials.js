import api from "../api";
import * as types from "../constants/ActionTypes";

export const getTutorials = slug => dispatch => {
  dispatch({
    type: types.TUTORIALS_REQUESTED
  });

  api.getTutorials(slug).then(data => {
    dispatch({
      type: types.FETCH_TUTORIALS_SUCCESS,
      tutorials: data
    });
  });
};
