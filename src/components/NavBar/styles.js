import styled from "styled-components";

export const NavBarContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom: 1px solid #999999;
  position: relative;
`
export const NavButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 16px;
  margin-right: 8px;
  color: #333333;
  border: none;
  background: transparent;
  margin-bottom: -1px;


  ${(props) => props.isActive && `
    color: #1d4354;
    border-bottom: 1px solid #1d4354;
  `}
`