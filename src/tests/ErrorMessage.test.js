import React from "react";
import ErrorMessage from "../components/ErrorMessage";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<ErrorMessage />", () => {
  describe("when onClick handled is provided", () => {
    const onClickHandler = jest.fn();
    const tree = shallow(<ErrorMessage onClick={onClickHandler} />);

    it("renders retry button", () => {
      expect(tree.find(".button").exists()).toBe(true);
    });

    it("matches snapshot", () => {
      expect(toJson(tree)).toMatchSnapshot();
    });

    it("calls handler when button is clicked", () => {
      tree.find(".button").simulate("click", { preventDefault: jest.fn() });
      expect(onClickHandler).toHaveBeenCalled();
    });
  });

  describe("when onClick handled is not provided", () => {
    it("renders retry button", () => {
      const tree = shallow(<ErrorMessage />);
      expect(tree.find(".button").exists()).toBe(false);
    });

    it("matches snapshot", () => {
      const tree = shallow(<ErrorMessage />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });
});
