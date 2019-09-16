import React from "react";
import DashboardContainer from "./dashboard-container";
import { shallow } from "enzyme";

// const generationmixData = [
//   {
//     fuel: "biomass",
//     perc: 4.8
//   },
//   {
//     fuel: "coal",
//     perc: 2.5
//   },
//   {
//     fuel: "imports",
//     perc: 8.7
//   },
//   {
//     fuel: "gas",
//     perc: 46.5
//   },
//   {
//     fuel: "nuclear",
//     perc: 16.1
//   },
//   {
//     fuel: "other",
//     perc: 0.3
//   },
//   {
//     fuel: "hydro",
//     perc: 0.9
//   },
//   {
//     fuel: "solar",
//     perc: 14.6
//   },
//   {
//     fuel: "wind",
//     perc: 5.6
//   }
// ];

describe("data is loading", () => {
  it("renders the loading spinner", () => {
    const component = shallow(<DashboardContainer />);

    expect(component.find("LoadingSpinner")).toHaveLength(1);
    expect(component.find("LoadingSpinner").prop("loading")).toBeTruthy;
  });
});

// TO DO: investigate if there is a way to test useEffect & useState hooks
// using Enzyme mount() rendering (commented tests below do not work)
// Possibly related: https://github.com/airbnb/enzyme/issues/2073

// describe("data is unavailable (response error)", () => {
//   beforeEach(() => {
//     fetchMock.resetMocks();
//   });

//   it("renders the error page", () => {
//     fetchMock.mockRejectOnce(new Error('server unavailable'));
//     const component = mount(<DashboardContainer />);

//     expect(component.find("ErrorPage")).toHaveLength(1);
//   });
// });

// describe("data has loaded", () => {
//   beforeEach(() => {
//     fetchMock.resetMocks();
//   });

//   it("renders the dashboard", () => {
//     const data = {
//       from: '2019-09-15T17:30Z',
//       to: '2019-09-15T18:00Z',
//       generationmix: generationmixData
//     };
//     fetchMock.mockResolvedValueOnce({ data });

//     const component = mount(<DashboardContainer />);

//     expect(component.find("Dashboard")).toHaveLength(1);
//     expect(component.find("Dashboard").prop('mixData')).toEqual(data);
//   });
// });
