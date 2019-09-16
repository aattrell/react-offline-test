import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const breakpoints = {
  small: "468px",
  medium: "768px",
  large: "1024px",
  xlarge: "1270px"
};

const StyledTile = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: solid 1px #000;
  height: 100px;
  width: 150px;
  background-color: #ffd4e5;

  @media (min-width: ${breakpoints.small}) {
    margin: 20px;
  }

  @media (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const StyledFuel = styled.div`
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
`;

const StyledPerc = styled.div`
  padding: 0 10px 10px;
  font-weight: bold;
  font-size: 32px;
`;

interface Props {
  fuel: string;
  perc: number;
}

export default function DataTile({ fuel, perc }: Props) {
  return (
    <StyledTile>
      <StyledFuel>{fuel}</StyledFuel>
      <StyledPerc>{perc}%</StyledPerc>
    </StyledTile>
  );
}

DataTile.propTypes = {
  fuel: PropTypes.string.isRequired,
  perc: PropTypes.number.isRequired
};
