import styled from 'styled-components';

export const SelectWrapper = styled.div`
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  width: 100%;
  margin-right: auto;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const TimeframeOption = styled.div`
  padding: 16px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${({isActive}) =>
          isActive &&
          `
    color: #1d4354;
  `}
  &:last-child {
    border-bottom: none;
  }
`;