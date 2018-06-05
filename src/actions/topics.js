import api from "../api";
import * as types from "../constants/ActionTypes";

export const followTopic = id => {
  return {
    type: types.FOLLOW_TOPIC,
    id
  };
};

export const unfollowTopic = id => {
  return {
    type: types.UNFOLLOW_TOPIC,
    id
  };
};

export const getTopics = () => dispatch => {
  dispatch({
    type: types.TOPICS_REQUESTED
  });

  api.getTopics().then(data => {
    dispatch({
      type: types.FETCH_TOPICS_SUCCESS,
      topics: data
    });
  });
};
