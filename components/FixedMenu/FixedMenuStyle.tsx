import styled from "styled-components";

interface Props {
  showMenuList?: boolean;
}

const Menu = styled.div<Props>`
  position: fixed;
  top: 16px;
  right: 3%;
  width: 40px;
  height: 25px;
  cursor: pointer;
  z-index: 9999;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
  ${(props) => props.theme.screens.lg} {
    right: 1%;
  }
  > div {
    position: absolute;
    background-color: ${(props) =>
      props.showMenuList ? "#DF7E8F" : "#707070"};
    height: 1px;
    transition: 0.3s;
    &:nth-child(1) {
      width: 100%;
      top: ${(props) => (props.showMenuList ? "50%" : "0")};
      transform: ${(props) => (props.showMenuList ? "rotate(-45deg)" : "0")};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.showMenuList ? 0 : 1)};
      top: 50%;
      width: 50%;
    }
    &:nth-child(3) {
      width: ${(props) => (props.showMenuList ? "100%" : "75%")};
      top: ${(props) => (props.showMenuList ? "50%" : "100%")};
      transform: ${(props) => (props.showMenuList ? "rotate(45deg)" : "0")};
    }
  }
`;

export { Menu };
