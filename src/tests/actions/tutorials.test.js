import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import api from "../../api";

import {
  invalidateTutorials,
  fetchTutorialsIfNeeded
} from "../../actions/tutorials";
import * as types from "../../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const withUnsuccessfullApiResponse = ({ store, slug }) => {
  describe("when api does not resolve", () => {
    beforeEach(() => {
      api.getTutorials = slug => {
        return new Promise((resolve, reject) => reject());
      };
    });

    it("executes fetch data", () => {
      const expectedActions = [
        { type: types.FETCH_TUTORIALS_REQUESTED, slug },
        { type: types.FETCH_TUTORIALS_ERROR, slug }
      ];

      return store.dispatch(fetchTutorialsIfNeeded(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
};

const withSuccessfullApiResponse = ({ store, slug, tutorials }) => {
  describe("when api resolves", () => {
    beforeEach(() => {
      api.getTutorials = slug => {
        return new Promise((resolve, reject) => resolve(tutorials));
      };
    });

    it("executes fetch data", () => {
      const expectedActions = [
        { type: types.FETCH_TUTORIALS_REQUESTED, slug },
        { type: types.FETCH_TUTORIALS_SUCCESS, slug, tutorials }
      ];

      return store.dispatch(fetchTutorialsIfNeeded(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
};

describe("invalidateTutorials", () => {
  it("returns action to be dispatched", () => {
    const slug = "foo";

    expect(invalidateTutorials(slug)).toEqual({
      type: types.INVALIDATE_TUTORIALS,
      slug
    });
  });
});

describe("fetchTutorialsIfNeeded", () => {
  const slug = "foo";

  const getStore = tutorial =>
    mockStore({
      tutorials: {
        [slug]: tutorial
      }
    });

  describe("when tutorials are not available", () => {
    const tutorial = null;

    withSuccessfullApiResponse({
      store: getStore(tutorial),
      slug,
      tutorials: [tutorial]
    });
    withUnsuccessfullApiResponse({ store: getStore(tutorial), slug });
  });

  describe("when tutorials are invalidated", () => {
    const tutorial = {
      didInvalidate: true
    };

    withSuccessfullApiResponse({
      store: getStore(tutorial),
      slug,
      tutorials: [tutorial]
    });
    withUnsuccessfullApiResponse({ store: getStore(tutorial), slug, tutorial });
  });

  describe("when tutorials are validated", () => {
    const tutorial = {
      didInvalidate: false
    };

    it("returns undefined", () => {
      expect(getStore(tutorial).dispatch(fetchTutorialsIfNeeded(slug))).toBe(
        undefined
      );
    });
  });

  describe("when tutorials are isLoading", () => {
    const tutorial = {
      isLoading: true
    };

    it("returns undefined", () => {
      expect(getStore(tutorial).dispatch(fetchTutorialsIfNeeded(slug))).toBe(
        undefined
      );
    });
  });
});
