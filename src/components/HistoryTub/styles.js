import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #d8d8d8;
  background-color: #f7f7f7;
  font-size: ${({date}) => (date ? '20px' : '16px')};
  width: ${({date}) => (date ? 'calc(100% / 3)' : '')};
`;

export const Td = styled.td`
  padding: 10px;
  text-align: left;
  border: 1px solid #d8d8d8;
  background-color: white;
  color: ${({change}) => (change > 0 ? 'green' : change < 0 ? 'red' : '')};
`;