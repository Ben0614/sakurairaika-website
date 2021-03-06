import styled from "styled-components";

interface Props {
  showSiteLinks?: boolean;
  showFooter?: boolean;
}

const FooterWrap = styled.div<Props>`
  /* 根據showFooter狀態顯示或隱藏 */
  opacity: ${(props) => (props.showFooter ? 1 : 0)};
  transition: 1s;
  padding: ${(props) => props.theme.pd(12)} 0;
`;
const SiteSupport = styled.div`
  margin: 0 0 ${(props) => props.theme.mg(12)};
`;
const SiteSupportTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 0 0 ${(props) => props.theme.pd(2)};
  margin: 0 0 ${(props) => props.theme.mg(3)};
  cursor: pointer;
  > div {
    display: none;
  }
  h3 {
    letter-spacing: ${(props) => props.theme.letters.siteSupport};
    font-weight: ${(props) => props.theme.fw.bigTitle};
  }
  h3,
  svg {
    font-size: ${(props) => props.theme.fz(5) + "px"};
  }
  ${(props) => props.theme.screens.lg} {
    width: 50%;
    margin: 0 auto ${(props) => props.theme.mg(3)};
    > div {
      display: block;
    }
  }
`;
const SiteSupportList = styled.ul<Props>`
  /* 根據showSiteLinks判斷List高度要給多少 */
  height: ${(props) => (props.showSiteLinks ? "175px" : "0")};
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fz() + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
  transition: 0.3s;
  > a {
    width: 50%;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
    li {
      display: flex;
      align-items: center;
      margin: 0 0 ${(props) => props.theme.mg(3)};
      svg {
        color: #aaa;
      }
      p {
        font-family: ${(props) => props.theme.ff.jp};
      }
    }
  }
  ${(props) => props.theme.screens.lg} {
    /* 大螢幕高度較矮 */
    height: ${(props) => (props.showSiteLinks ? "105px" : "0")};
    width: 50%;
    margin: 0 auto;
    > a {
      width: 25%;
    }
  }
`;
const CopyRight = styled.p`
  color: #aaa;
  text-align: center;
  font-size: ${(props) => props.theme.fz() + "px"};
  font-family: ${(props) => props.theme.ff.jp};
`;

export {
  FooterWrap,
  SiteSupport,
  SiteSupportTitle,
  SiteSupportList,
  CopyRight,
};
