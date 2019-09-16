import * as React from "react";
import PropTypes from "prop-types";
import PacmanLoader from "react-spinners/PacmanLoader";
import styled from "styled-components";

const breakpoints = {
  small: "468px",
  medium: "768px",
  large: "1024px",
  xlarge: "1270px"
};

const StyledLoadingHeading = styled.h2`
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px @media (min-width: ${breakpoints.medium}) {
    font-size: 24px;
  }
`;

interface Props {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: Props) => (
  <div>
    <StyledLoadingHeading>
      Loading energy generation mix data...
    </StyledLoadingHeading>
    <PacmanLoader
      sizeUnit={"px"}
      size={100}
      color={"#FFFF00"}
      loading={loading}
    />
  </div>
);

export default LoadingSpinner;

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};
