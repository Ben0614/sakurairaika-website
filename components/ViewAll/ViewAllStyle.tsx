import styled from "styled-components";

interface Props {
  mobile?: boolean;
  computer?: boolean;
}

const ItemViewAll = styled.div<Props>`
  display: ${(props) => (props.mobile ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
  &:hover div:nth-child(2) {
    width: 5%;
  }
  ${(props) => props.theme.screens.lg} {
    display: none;
  }
  div {
    transition: 0.3s;
    background-color: #000;
  }
  div:nth-child(1) {
    width: 20%;
    height: 1px;
  }
  div:nth-child(2) {
    position: absolute;
    width: 0;
    height: 2px;
  }
  p {
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    letter-spacing: ${(props) => props.theme.letters.viewAll};
    margin: 0 0 0 ${(props) => props.theme.mg(2)};
  }
`;
const ItemViewAllComputer = styled.div<Props>`
  display: none;
  cursor: pointer;
  position: relative;
  &:hover div:nth-child(3) {
    width: 20%;
  }
  ${(props) => props.theme.screens.lg} {
    display: ${(props) => (props.computer ? "block" : "none")};
  }
  div {
    transition: 0.3s;
    background-color: #000;
  }
  div:nth-child(2) {
    width: 80%;
    height: 1px;
  }
  div:nth-child(3) {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
  }
  p {
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    letter-spacing: ${(props) => props.theme.letters.viewAll};
    margin: 0 0 ${(props) => props.theme.mg(2)};
  }
`;

export { ItemViewAll, ItemViewAllComputer };
