import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import api from "../../api";

import {
  invalidateTopicDetails,
  fetchTopicDetailsIfNeeded
} from "../../actions/topic";
import * as types from "../../constants/ActionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const withUnsuccessfullApiResponse = ({ store, slug }) => {
  describe("when api does not resolve", () => {
    beforeEach(() => {
      api.getTopicDetails = slug => {
        return new Promise((resolve, reject) => reject());
      };
    });

    it("executes fetch data", () => {
      const expectedActions = [
        { type: types.FETCH_TOPIC_DETAILS_REQUESTED, slug },
        { type: types.FETCH_TOPIC_DETAILS_ERROR, slug }
      ];

      return store.dispatch(fetchTopicDetailsIfNeeded(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
};

const withSuccessfullApiResponse = ({ store, slug, topic }) => {
  describe("when api resolves", () => {
    beforeEach(() => {
      api.getTopicDetails = slug => {
        return new Promise((resolve, reject) => resolve(topic));
      };
    });

    it("executes fetch data", () => {
      const expectedActions = [
        { type: types.FETCH_TOPIC_DETAILS_REQUESTED, slug },
        { type: types.FETCH_TOPIC_DETAILS_SUCCESS, slug, topic }
      ];

      return store.dispatch(fetchTopicDetailsIfNeeded(slug)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
};

describe("invalidateTopicDetails", () => {
  it("returns action to be dispatched", () => {
    const slug = "foo";

    expect(invalidateTopicDetails(slug)).toEqual({
      type: types.INVALIDATE_TOPIC_DETAILS,
      slug
    });
  });
});

describe("fetchTopicDetailsIfNeeded", () => {
  const slug = "foo";

  const getStore = topic =>
    mockStore({
      topics: {
        topicDetails: {
          [slug]: topic
        }
      }
    });

  describe("when topic details are not available", () => {
    const topic = null;

    withSuccessfullApiResponse({ store: getStore(topic), slug, topic });
    withUnsuccessfullApiResponse({ store: getStore(topic), slug });
  });

  describe("when topic is invalidated", () => {
    const topic = {
      didInvalidate: true
    };

    withSuccessfullApiResponse({ store: getStore(topic), slug, topic });
    withUnsuccessfullApiResponse({ store: getStore(topic), slug });
  });

  describe("when topic is validated", () => {
    const topic = {
      didInvalidate: false
    };

    it("returns undefined", () => {
      expect(getStore(topic).dispatch(fetchTopicDetailsIfNeeded(slug))).toBe(
        undefined
      );
    });
  });

  describe("when topic is isLoading", () => {
    const topic = {
      isLoading: true
    };

    it("returns undefined", () => {
      expect(getStore(topic).dispatch(fetchTopicDetailsIfNeeded(slug))).toBe(
        undefined
      );
    });
  });
});
