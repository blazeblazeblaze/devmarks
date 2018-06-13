import api from "../api";
import * as types from "../constants/ActionTypes";

const fetchTopicDetails = slug => dispatch => {
  dispatch({
    type: types.FETCH_TOPIC_DETAILS_REQUESTED,
    slug
  });

  api
    .getTopicDetails(slug)
    .then(data => {
      dispatch({
        type: types.FETCH_TOPIC_DETAILS_SUCCESS,
        topic: data,
        slug
      });
    })
    .catch(() => dispatch({ type: types.FETCH_TOPIC_DETAILS_ERROR, slug }));
};

const shouldFetchTopicDetails = (state, slug) => {
  const topic = state.topics.topicDetails[slug];

  if (!topic) {
    return true;
  } else if (topic.isFetching) {
    return false;
  } else {
    return topic.didInvalidate;
  }
};

export const invalidateTopicDetails = slug => dispatch =>
  dispatch({ type: types.INVALIDATE_TOPIC_DETAILS, slug });

export const fetchTopicDetailsIfNeeded = slug => (dispatch, getState) => {
  if (shouldFetchTopicDetails(getState(), slug)) {
    return dispatch(fetchTopicDetails(slug));
  }
};
