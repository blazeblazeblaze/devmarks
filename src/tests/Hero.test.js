import React from "react";
import Hero from "../components/Hero";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Hero />", () => {
  const props = {
    title: "Custom title"
  };

  it("renders title on h1 level", () => {
    const tree = shallow(<Hero {...props} />);
    expect(tree.find("h1").text()).toBe(props.title);
  });

  it("renders subtitle on h2 level if provided", () => {
    const propsWithSubtitle = {
      ...props,
      subtitle: "subtitle"
    };
    const tree = shallow(<Hero {...propsWithSubtitle} />);

    expect(tree.find("h2").length).toBe(1);
  });

  it("renders subtitle on h2 level if provided", () => {
    const tree = shallow(<Hero {...props} />);

    expect(tree.find("h2").length).toBe(0);
  });

  it("matches snapshot", () => {
    const tree = shallow(<Hero {...props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
