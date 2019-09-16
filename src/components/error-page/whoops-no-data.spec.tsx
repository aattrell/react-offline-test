import React from "react";
import ErrorPage from "./whoops-no-data";
import { shallow } from "enzyme";

const expectedErrorMessage =
  "We don't have access to energy generation mix data at this time. Please check back later.";

it("renders the error page correctly", () => {
  const component = shallow(<ErrorPage />);

  expect(component.html()).toMatchSnapshot();
  expect(component.text()).toContain(expectedErrorMessage);
});
