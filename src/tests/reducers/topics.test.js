import reducer from "../../reducers/topics";
import * as types from "../../constants/ActionTypes";

describe("topics/entities reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {}).entities).toEqual([]);
  });

  it("handles FETCH_TOPICS_SUCCESS", () => {
    const data = [];
    const action = {
      type: types.FETCH_TOPICS_SUCCESS,
      topics: data
    };

    expect(reducer({}, action).entities).toEqual(data);
  });
});

describe("topics/status reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {}).status).toEqual({});
  });

  it("handles FETCH_TOPICS_REQUESTED", () => {
    const action = {
      type: types.FETCH_TOPICS_REQUESTED
    };

    expect(reducer({}, action).status).toEqual({
      isLoading: true,
      hasErrors: false,
      didInvalidate: false
    });
  });

  it("handles FETCH_TOPICS_SUCCESS", () => {
    const action = {
      type: types.FETCH_TOPICS_SUCCESS,
      topics: []
    };

    expect(reducer({}, action).status).toEqual({
      isLoading: false,
      hasErrors: false,
      didInvalidate: false
    });
  });

  it("handles FETCH_TOPICS_ERROR", () => {
    const action = {
      type: types.FETCH_TOPICS_ERROR
    };

    expect(reducer({}, action).status).toEqual({
      isLoading: false,
      hasErrors: true,
      didInvalidate: false
    });
  });

  it("handles INVALIDATE_TOPICS", () => {
    const action = {
      type: types.INVALIDATE_TOPICS
    };

    expect(reducer({}, action).status).toEqual({
      hasErrors: false,
      didInvalidate: true
    });
  });
});
