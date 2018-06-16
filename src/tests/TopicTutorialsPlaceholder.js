import React from "react";
import TopicTutorialsPlaceholder from "../components/TopicTutorialsPlaceholder";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<TopicTutorialsPlaceholder />", () => {
  const tree = shallow(<TopicTutorialsPlaceholder />);
  it("matches snapshot", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
