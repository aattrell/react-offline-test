import * as React from "react";
import PropTypes from "prop-types";
import DataTile from "./data-tlle";
import EnergyGenerationGraph from "./energy-generation-graph";
import formatDate from "../../utils/format-date";
import styled from "styled-components";

const breakpoints = {
  small: "468px",
  medium: "768px",
  large: "1024px",
  xlarge: "1270px"
};

export const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 22px;

  @media (min-width: ${breakpoints.small}) {
    font-size: 24px;
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 32px;
  }

  @media (min-width: ${breakpoints.xlarge}) {
    font-size: 40px;
  }
`;

export const StyledSubHeading = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 14px;

  @media (min-width: ${breakpoints.medium}) {
    font-size: 16px;
    padding-bottom: 20px;
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.xlarge}) {
    font-size: 24px;
  }
`;

const StyledTiles = styled.div`
  text-align: center;
`;

interface Props {
  mixData: {
    from: string;
    generationmix: Array<{ fuel: string; perc: number }>;
    to: string;
  };
}

export default function Dashboard({ mixData }: Props) {
  return (
    <div>
      <StyledHeading>UK Energy Mix</StyledHeading>
      <StyledSubHeading>
        Data from {formatDate(mixData.from)} to {formatDate(mixData.to)}
      </StyledSubHeading>
      <StyledTiles>
        {mixData.generationmix.map(({ fuel, perc }, index) => (
          <DataTile key={`${fuel}-${index}`} fuel={fuel} perc={perc} />
        ))}
      </StyledTiles>
      <EnergyGenerationGraph generationMix={mixData.generationmix} />
    </div>
  );
}

Dashboard.propTypes = {
  mixData: PropTypes.shape({
    from: PropTypes.string,
    generationmix: PropTypes.arrayOf(
      PropTypes.shape({
        fuel: PropTypes.string,
        perc: PropTypes.number
      })
    ),
    to: PropTypes.string
  }).isRequired
};
