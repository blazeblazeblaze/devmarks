import React from "react";
import Topic from "../components/Topic";
import RecommendedTopics from "../containers/RecommendedTopics";
import TopicTutorials from "../containers/TopicTutorials";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Topic />", () => {
  const slug = "some slug";
  const tree = shallow(<Topic topic={{}} slug={slug} />);

  it("renders Hero", () => {
    expect(tree.find("Hero").props()).toEqual({
      title: "Browse tutorials"
    });
  });

  it("passes slug down to TopicTutorials", () => {
    expect(tree.find(TopicTutorials).props()).toEqual({ slug: slug });
  });

  describe("with given topic", () => {
    it("renders RecommendedTopics", () => {
      expect(tree.find(RecommendedTopics).exists()).toBe(true);
    });

    it("RecommendedTopics receives slug", () => {
      expect(tree.find(RecommendedTopics).props()).toEqual({ topic: {} });
    });
  });

  describe("without topic", () => {
    const tree = shallow(<Topic slug={slug} />);

    it("does not render RecommendedTopics", () => {
      expect(tree.find(RecommendedTopics).exists()).toBe(false);
    });
  });

  it("matches snapshot", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
