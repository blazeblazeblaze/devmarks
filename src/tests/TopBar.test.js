import React from "react";
import TopBar from "../components/TopBar";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<TopBar />", () => {
  it("matches snapshot", () => {
    const tree = shallow(<TopBar />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
