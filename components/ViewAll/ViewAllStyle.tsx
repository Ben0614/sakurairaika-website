import styled from "styled-components";

interface Props {
  mobile?: boolean;
  computer?: boolean;
}

const ItemViewAll = styled.div<Props>`
  /* 如果傳來的是mobile 就設置flex */
  display: ${(props) => (props.mobile ? "flex" : "none")};
  align-items: center;
  cursor: pointer;
  /* 第二條線觸碰加粗 */
  &:hover div:nth-child(2) {
    width: 5%;
  }
  /* 桌機一律none */
  ${(props) => props.theme.screens.lg} {
    display: none;
  }
  div {
    transition: 0.3s;
    background-color: #000;
  }
  /* 第一條線 */
  div:nth-child(1) {
    width: 20%;
    height: 1px;
  }
  /* 第二條線 */
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
  /* 手機一律none */
  display: none;
  cursor: pointer;
  position: relative;
  /* 第二條線觸碰加粗 */
  &:hover div:nth-child(3) {
    width: 20%;
  }
  /* 如果傳來的是computer 就設置block */
  ${(props) => props.theme.screens.lg} {
    display: ${(props) => (props.computer ? "block" : "none")};
  }
  div {
    transition: 0.3s;
    background-color: #000;
  }
  /* 第一條線 */
  div:nth-child(2) {
    width: 80%;
    height: 1px;
  }
  /* 第二條線 */
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
