import React from "react";
import HomePage from "../components/HomePage";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<HomePage />", () => {
  const tree = shallow(<HomePage />);

  it("matches snapshot", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
