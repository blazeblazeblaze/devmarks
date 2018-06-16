import React from "react";
import TopicListPlaceholder from "../components/TopicListPlaceholder";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<TopicListPlaceholder />", () => {
  const tree = shallow(<TopicListPlaceholder />);
  it("matches snapshot", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
