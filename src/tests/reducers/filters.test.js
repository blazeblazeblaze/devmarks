import reducer from "../../reducers/filters";
import * as types from "../../constants/ActionTypes";
import { LOCATION_CHANGE } from "react-router-redux";

describe("filters reducer", () => {
  const initialState = {
    topicsFilter: {
      name: {
        value: ""
      },
      category: {
        value: ""
      }
    }
  };

  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("handles LOCATION_CHANGE", () => {
    const action = {
      type: LOCATION_CHANGE
    };

    expect(reducer({}, action)).toEqual(initialState);
  });

  it("handles FILTER_TOPICS", () => {
    const newState = {
      topicsFilter: {
        ...initialState.topicsFilter,
        name: { value: "NEW NAME" }
      }
    };

    const action = {
      type: types.FILTER_TOPICS,
      activeFilters: {
        name: {
          value: "NEW NAME"
        }
      }
    };

    expect(reducer({}, action)).toEqual(newState);
  });
});
