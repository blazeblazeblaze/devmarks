import reducer from "../../reducers/tutorials";
import * as types from "../../constants/ActionTypes";

describe("tutorials reducer", () => {
  const slug = "foo";
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("handles FETCH_TUTORIALS_REQUESTED", () => {
    const action = {
      type: types.FETCH_TUTORIALS_REQUESTED,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        isLoading: true,
        hasErrors: false,
        didInvalidate: false,
        entities: []
      }
    });
  });

  it("handles FETCH_TUTORIALS_SUCCESS", () => {
    const tutorials = [];

    const action = {
      type: types.FETCH_TUTORIALS_SUCCESS,
      slug,
      tutorials
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        isLoading: false,
        hasErrors: false,
        didInvalidate: false,
        entities: tutorials
      }
    });
  });

  it("handles FETCH_TUTORIALS_ERROR", () => {
    const action = {
      type: types.FETCH_TUTORIALS_ERROR,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        isLoading: false,
        hasErrors: true,
        didInvalidate: false,
        entities: []
      }
    });
  });

  it("handles INVALIDATE_TUTORIALS", () => {
    const action = {
      type: types.INVALIDATE_TUTORIALS,
      slug
    };

    expect(reducer({}, action)).toEqual({
      [slug]: {
        isLoading: false,
        hasErrors: false,
        didInvalidate: true,
        entities: []
      }
    });
  });
});
