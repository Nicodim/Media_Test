import styled from "styled-components";
import {LineChart} from "recharts";

export const StyledOverview = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
`;

export const StyledLineChart = styled(LineChart)`
  width: 100%;
  height: calc(100vh - 50px);
  margin: 0 auto;
`;