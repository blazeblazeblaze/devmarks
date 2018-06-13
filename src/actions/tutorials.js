import api from "../api";
import * as types from "../constants/ActionTypes";

const fetchTopics = slug => dispatch => {
  dispatch({
    type: types.FETCH_TUTORIALS_REQUESTED,
    slug
  });

  api
    .getTutorials(slug)
    .then(data => {
      dispatch({
        type: types.FETCH_TUTORIALS_SUCCESS,
        tutorials: data,
        slug
      });
    })
    .catch(() =>
      dispatch({
        type: types.FETCH_TUTORIALS_ERROR,
        slug
      })
    );
};

const shouldFetchTutorials = (state, slug) => {
  const tutorials = state.tutorials[slug];

  if (!tutorials) {
    return true;
  } else if (tutorials.isFetching) {
    return false;
  } else {
    return tutorials.didInvalidate;
  }
};

export const invalidateTutorials = slug => dispatch =>
  dispatch({ type: types.INVALIDATE_TUTORIALS, slug });

export const fetchTutorialsIfNeeded = slug => (dispatch, getState) => {
  if (shouldFetchTutorials(getState(), slug)) {
    return dispatch(fetchTopics(slug));
  }
};
