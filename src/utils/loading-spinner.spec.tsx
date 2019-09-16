import React from "react";
import LoadingSpinner from "./loading-spinner";
import PacmanLoader from "react-spinners/PacmanLoader";
import { shallow } from "enzyme";

it("renders a loading message", () => {
  const component = shallow(<LoadingSpinner loading={true} />);

  expect(component.text()).toContain("Loading energy generation mix data...");
});

it("renders a loading spinner", () => {
  const component = shallow(<LoadingSpinner loading={true} />);

  expect(component.find(PacmanLoader)).toHaveLength(1);
});
