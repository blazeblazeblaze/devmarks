import api from "../api";
import * as types from "../constants/ActionTypes";

const fetchTopicDetails = slug => dispatch => {
  dispatch({
    type: types.FETCH_TOPIC_DETAILS_REQUESTED,
    slug
  });

  return api
    .getTopicDetails(slug)
    .then(topic => {
      dispatch({
        type: types.FETCH_TOPIC_DETAILS_SUCCESS,
        topic,
        slug
      });
    })
    .catch(() => dispatch({ type: types.FETCH_TOPIC_DETAILS_ERROR, slug }));
};

const shouldFetchTopicDetails = (state, slug) => {
  const topic = state.topics.topicDetails[slug];

  if (!topic) {
    return true;
  } else if (topic.isLoading) {
    return false;
  } else {
    return topic.didInvalidate;
  }
};

export const invalidateTopicDetails = slug => ({
  type: types.INVALIDATE_TOPIC_DETAILS,
  slug
});

export const fetchTopicDetailsIfNeeded = slug => (dispatch, getState) => {
  if (shouldFetchTopicDetails(getState(), slug)) {
    return dispatch(fetchTopicDetails(slug));
  }
};
