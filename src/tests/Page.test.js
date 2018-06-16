import React from "react";
import Page from "../components/Page";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<Page />", () => {
  const ChildrenComponent = () => <div>children</div>;
  const tree = shallow(
    <Page>
      <ChildrenComponent />
    </Page>
  );

  it("applies background styles", () => {
    expect(tree.getElement().props.style).toEqual({
      backgroundColor: "#fafafa"
    });
  });

  it("renders given children", () => {
    expect(tree.find(ChildrenComponent).exists()).toBe(true);
  });

  it("renders Footer", () => {
    expect(tree.find("Footer").exists()).toBe(true);
  });

  it("renders given TopBar", () => {
    expect(tree.find("TopBar").exists()).toBe(true);
  });

  it("matches snapshot", () => {
    expect(toJson(tree)).toMatchSnapshot();
  });
});
