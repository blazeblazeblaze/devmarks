import reducer from "../../reducers/topicDetails";
import * as types from "../../constants/ActionTypes";

describe("topicDetails reducer", () => {
  const slug = "foo";

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("handles FETCH_TOPIC_DETAILS_REQUESTED", () => {
    const action = {
      type: types.FETCH_TOPIC_DETAILS_REQUESTED,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        didInvalidate: false,
        hasErrors: false,
        isLoading: true,
        payload: {}
      }
    });
  });

  it("handles FETCH_TOPIC_DETAILS_SUCCESS", () => {
    const payload = {
      foo: "bar"
    };

    const action = {
      type: types.FETCH_TOPIC_DETAILS_SUCCESS,
      slug,
      topic: payload
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        didInvalidate: false,
        hasErrors: false,
        isLoading: false,
        payload
      }
    });
  });

  it("handles FETCH_TOPIC_DETAILS_ERROR", () => {
    const action = {
      type: types.FETCH_TOPIC_DETAILS_ERROR,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        didInvalidate: false,
        hasErrors: true,
        isLoading: false,
        payload: {}
      }
    });
  });

  it("handles INVALIDATE_TOPIC_DETAILS", () => {
    const action = {
      type: types.INVALIDATE_TOPIC_DETAILS,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        didInvalidate: true,
        hasErrors: false,
        isLoading: false,
        payload: {}
      }
    });
  });
});
