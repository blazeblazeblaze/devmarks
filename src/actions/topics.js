import api from "../api";
import * as types from "../constants/ActionTypes";

const shouldFetchTopics = ({ topics }) => {
  const topicItems = topics.entities;

  if (!topicItems || topicItems.length === 0) {
    return true;
  } else if (topics.status.isLoading) {
    return false;
  } else {
    return topics.status.didInvalidate;
  }
};

const fetchTopics = () => dispatch => {
  dispatch({
    type: types.FETCH_TOPICS_REQUESTED
  });

  api
    .getTopics()
    .then(topics => {
      dispatch({
        type: types.FETCH_TOPICS_SUCCESS,
        topics
      });
    })
    .catch(() => dispatch({ type: types.FETCH_TOPICS_ERROR }));
};

export const invalidateTopics = () => dispatch =>
  dispatch({ type: types.INVALIDATE_TOPICS });

export const fetchTopicsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchTopics(getState())) {
    return dispatch(fetchTopics());
  }
};
