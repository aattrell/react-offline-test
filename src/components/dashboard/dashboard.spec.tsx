import React from "react";
import Dashboard, { StyledHeading, StyledSubHeading } from "./dashboard";
import { shallow } from "enzyme";

const mixData = {
  from: "2019-09-15T14:00Z",
  generationmix: [
    {
      fuel: "biomass",
      perc: 4.8
    },
    {
      fuel: "coal",
      perc: 2.5
    },
    {
      fuel: "imports",
      perc: 8.7
    },
    {
      fuel: "gas",
      perc: 46.5
    },
    {
      fuel: "nuclear",
      perc: 16.1
    },
    {
      fuel: "other",
      perc: 0.3
    },
    {
      fuel: "hydro",
      perc: 0.9
    },
    {
      fuel: "solar",
      perc: 14.6
    },
    {
      fuel: "wind",
      perc: 5.6
    }
  ],
  to: "2019-09-15T14:30Z"
};

describe("data is loading", () => {
  it("renders a heading", () => {
    const component = shallow(<Dashboard mixData={mixData} />);

    expect(component.find(StyledHeading).text()).toEqual("UK Energy Mix");
  });

  it("renders a subheading containing the date range", () => {
    const expectedText =
      "Data from September 15, 2:00pm to September 15, 2:30pm";
    const component = shallow(<Dashboard mixData={mixData} />);

    expect(component.find(StyledSubHeading).text()).toEqual(expectedText);
  });

  it("renders the data tiles", () => {
    const component = shallow(<Dashboard mixData={mixData} />);

    expect(component.find("DataTile")).toHaveLength(9);
    expect(
      component
        .find("DataTile")
        .at(8)
        .prop("fuel")
    ).toEqual(mixData.generationmix[8].fuel);
    expect(
      component
        .find("DataTile")
        .at(8)
        .prop("perc")
    ).toEqual(mixData.generationmix[8].perc);
  });

  it("renders the energy generation graph", () => {
    const component = shallow(<Dashboard mixData={mixData} />);

    expect(component.find("EnergyGenerationGraph")).toHaveLength(1);
    expect(
      component.find("EnergyGenerationGraph").prop("generationMix")
    ).toEqual(mixData.generationmix);
  });
});
