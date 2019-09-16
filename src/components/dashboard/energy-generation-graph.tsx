import * as React from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  Cell,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

const colours = [
  "#967BB6",
  "#FF69B4",
  "#E40203",
  "#FF8B00",
  "#FDED01",
  "#007F24",
  "#00C0C0",
  "#0000F9",
  "#400098"
];
const breakpoints = {
  small: "468px",
  medium: "768px",
  large: "1024px",
  xlarge: "1270px"
};

const StyledBarChart = styled.div`
  display: none;

  @media (min-width: ${breakpoints.medium}) {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 320px;
    max-width: 1050px;
    margin: auto;
  }
`;

interface Props {
  generationMix: Array<{ fuel: string; perc: number }>;
}

const EnergyGenerationGraph = ({ generationMix }: Props) => (
  <StyledBarChart>
    <ResponsiveContainer>
      <BarChart data={generationMix}>
        <XAxis dataKey="fuel" />
        <YAxis dataKey="perc">
          <Label
            value="Percentage of total generation"
            offset={-15}
            angle={270}
            position="left"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <CartesianGrid vertical={false} />
        <Tooltip
          labelFormatter={label => {
            return `Fuel method : ${label}`;
          }}
          formatter={value => {
            return `${value}%`;
          }}
        />
        <Bar
          dataKey="perc"
          name="Total generation"
          fill="#000"
          isAnimationActive={false}
        >
          {generationMix.map((entry, index) => (
            <Cell key={`${entry.perc}-${index}`} fill={colours[index]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </StyledBarChart>
);

export default EnergyGenerationGraph;

EnergyGenerationGraph.propTypes = {
  generationMix: PropTypes.array.isRequired
};
