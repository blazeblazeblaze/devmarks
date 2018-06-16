import React from "react";
import Footer from "../components/Footer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Footer />", () => {
  it("matches snapshot", () => {
    const tree = shallow(<Footer />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
