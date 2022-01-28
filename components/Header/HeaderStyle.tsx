import styled from "styled-components";

interface Props {
  showMenuList?: boolean;
  showHeader?: boolean;
}

const HeaderWrap = styled.div<Props>`
  /* 用Image或者這個Bg都可以 */
  /* background: url("/images/mobile/mainimg_sp.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 935px; */

  /* 根據showHeader判斷顯示Header */
  opacity: ${(props) => (props.showHeader ? 1 : 0)};
  transition: 1s;
`;
const FixedList = styled.div<Props>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  /* 根據showMenuList判斷是否顯示MenuNav */
  z-index: ${(props) => (props.showMenuList ? 60 : -50)};
  opacity: ${(props) => (props.showMenuList ? 1 : 0)};
  transition: 0.5s;
  ${(props) => props.theme.screens.lg} {
    display: flex;
    align-items: center;
  }
`;
const FixedContainer = styled.div`
  padding: 0 ${(props) => props.theme.mg(5)};
  ${(props) => props.theme.screens.lg} {
    padding: 0;
    display: flex;
    width: 55%;
  }
`;
const FixedListImg = styled.div`
  position: relative;
  top: 0;
  /* 圖片w110% 會稍微往右邊偏 right:5%調整回來 */
  right: 5%;
  width: 110%;
  padding-top: 45%;
  margin: 0 0 ${(props) => props.theme.mg(5)};
  ${(props) => props.theme.screens.lg} {
    width: 45%;
    height: 110%;
  }
`;
const OfficalSite = styled.div`
  margin: 0 0 ${(props) => props.theme.mg(4)};
  ${(props) => props.theme.screens.lg} {
    width: 33.3333%;
  }
  > .title {
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    letter-spacing: ${(props) => props.theme.letters.link};
    color: #ccc;
    margin: 0 0 ${(props) => props.theme.mg(4)};
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > a {
      width: 50%;
      margin: 0 0 ${(props) => props.theme.mg(4)};
      transition: 0.3s;
      &:hover {
        opacity: 0.7;
      }
      ${(props) => props.theme.screens.lg} {
        width: 100%;
        margin: 0 0 ${(props) => props.theme.mg(6)};
      }
      li {
        display: flex;
        align-items: center;
        div {
          height: 1px;
          width: 10%;
          background-color: #000;
        }
        p {
          letter-spacing: ${(props) => props.theme.letters.link};
          margin: 0 0 0 ${(props) => props.theme.mg(2)};
        }
      }
    }
  }
`;
const Fanclub = styled(OfficalSite)``;
const Sns = styled.div`
  .title {
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    letter-spacing: ${(props) => props.theme.letters.link};
    color: #ccc;
    margin: 0 0 ${(props) => props.theme.mg(3)};
  }
  a {
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
    svg {
      color: #aaa;
      font-size: ${(props) => props.theme.fz(10) + "px"};
    }
  }
  a:last-child {
    margin: 0 0 0 ${(props) => props.theme.mg(6)};
  }
`;
const Member = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  top: 20px;
  right: 70px;
  z-index: 50;
  ${(props) => props.theme.screens.lg} {
    right: 80px;
  }
  > a {
    display: flex;
    align-items: center;
    margin: 0 ${(props) => props.theme.mg(2)};
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
    > svg {
      color: #eeb5c4;
    }
    p {
      letter-spacing: ${(props) => props.theme.letters.link};
    }
  }
`;
const Logo = styled.div`
  position: absolute;
  top: 65px;
  margin: 0 0 0 ${(props) => props.theme.mg(8)};
  ${(props) => props.theme.screens.lg} {
    right: 10%;
    top: 30%;
  }
`;
const MainImg = styled.div`
  position: relative;
  height: 100vh;
  z-index: -1;
  ${(props) => props.theme.screens.lg} {
    height: 95vh;
    margin: ${(props) => props.theme.mg(4)};
  }
`;

export {
  HeaderWrap,
  FixedList,
  FixedContainer,
  FixedListImg,
  OfficalSite,
  Fanclub,
  Sns,
  Member,
  Logo,
  MainImg,
};
