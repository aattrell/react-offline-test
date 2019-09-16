import formatDate from "./format-date";

describe("formatting date in a readable way", () => {
  it("displays morning times as am", () => {
    const dateString = "2019-09-15T01:00Z";
    const expectedFormattedDate = "September 15, 1:00am";

    expect(formatDate(dateString)).toEqual(expectedFormattedDate);
  });

  it("displays evening times as pm", () => {
    const dateString = "2019-09-15T18:00Z";
    const expectedFormattedDate = "September 15, 6:00pm";

    expect(formatDate(dateString)).toEqual(expectedFormattedDate);
  });
});
