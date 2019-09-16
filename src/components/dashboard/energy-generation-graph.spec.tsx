import React from "react";
import EnergyGenerationGraph from "./energy-generation-graph";
import { shallow } from "enzyme";

const generationmixData = [
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
];

it("renders a bar chart", () => {
  const component = shallow(
    <EnergyGenerationGraph generationMix={generationmixData} />
  );

  expect(component.find("BarChart").prop("data")).toEqual(generationmixData);
});

it("renders the axis correctly", () => {
  const component = shallow(
    <EnergyGenerationGraph generationMix={generationmixData} />
  );

  expect(component.find("XAxis").prop("dataKey")).toEqual("fuel");
  expect(component.find("YAxis").prop("dataKey")).toEqual("perc");
  expect(component.find("Label").prop("value")).toEqual(
    "Percentage of total generation"
  ); // custom label
});

it("renders a bar for every fuel type", () => {
  const component = shallow(
    <EnergyGenerationGraph generationMix={generationmixData} />
  );

  expect(component.find("Bar").find("Cell")).toHaveLength(
    generationmixData.length
  );
});

it("renders a tooltip", () => {
  const component = shallow(
    <EnergyGenerationGraph generationMix={generationmixData} />
  );

  expect(component.find("Tooltip")).toHaveLength(1);
});
