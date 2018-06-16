import { filterTopics } from "../../actions/filters";
import * as types from "../../constants/ActionTypes";

describe("filterTopics", () => {
  it("returns action to be dispatched", () => {
    const activeFilters = {
      foo: "bar"
    };
    expect(filterTopics(activeFilters)).toEqual({
      type: types.FILTER_TOPICS,
      activeFilters
    });
  });
});
