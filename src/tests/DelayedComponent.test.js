import React from "react";
import DelayedComponent from "../components/DelayedComponent";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<DelayedComponent />", () => {
  const MainComponent = () => <div>main component</div>;
  const Placeholder = () => <div>placeholder component</div>;

  describe("when isReady is true", () => {
    it("renders its children", () => {
      const tree = shallow(
        <DelayedComponent fallbackComponent={<Placeholder />} isReady={true}>
          <MainComponent />
        </DelayedComponent>
      );

      expect(toJson(tree)).toMatchSnapshot();
    });
  });

  describe("when isReady is false", () => {
    it("renders placeholder component", () => {
      const tree = shallow(
        <DelayedComponent fallbackComponent={<Placeholder />} isReady={false}>
          <MainComponent />
        </DelayedComponent>
      );

      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
