import styled from "styled-components";
import triangleGreen from '../../Images/triangleGreen.svg'
import triangleRed from '../../Images/triangleRed.svg'
export const HeaderContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #333333;
  background-color: rgb(255, 255, 255);
  margin-top: 14px;
  margin-left: 0px;
  margin-right: 0px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px 0px;
`

export const ContentContainer = styled.div`
  display: flex;
  padding: 16px 40px;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px
`

export const Subtitle = styled.div`
  font-size: 12px;
  color: #999999
`
export const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 120px;
`

export const ValueTitle = styled(Title)`
  font-size: 32px;
  text-align: center;
  color: ${(props) => props.isPositive < 0 ? '#d80027' : '#507e11'};
  margin-bottom: 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 14px;
    height: 16px;
    background-image: ${(props) => props.isPositive < 0 ? `url(${triangleRed})` : `url(${triangleGreen})`};
    background-size: 100% 100%;
    top: 10px;
    left: -5px;
  }
`;

export const ValueSubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ValueSubtitle = styled.div`
  font-size: 16px;
  color: ${(props) => props.isPositive < 0 ? '#d80027' : '#507e11'};
`
