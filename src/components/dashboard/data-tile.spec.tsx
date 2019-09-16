import React from "react";
import DataTile from "./data-tlle";
import { shallow } from "enzyme";

const fuel = "solar";
const perc = 14.6;

it("renders the fuel type", () => {
  const component = shallow(<DataTile fuel={fuel} perc={perc} />);

  expect(component.text()).toContain(fuel);
});

it("renders the percentage total", () => {
  const component = shallow(<DataTile fuel={fuel} perc={perc} />);

  expect(component.text()).toContain(`${perc}%`);
});
