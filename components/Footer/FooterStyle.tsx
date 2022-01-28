import styled from "styled-components";

interface Props {
  showNumber?: boolean;
  showSiteLinks?: boolean;
  loading?: boolean;
  showNews?: boolean;
  showProfile?: boolean;
  showSchedule?: boolean;
  showFanClud?: boolean;
  showSns?: boolean;
  showFooter?: boolean;
}

const FooterWrap = styled.div<Props>`
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
    }
  }
  ${(props) => props.theme.screens.lg} {
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
`;

export {
  FooterWrap,
  SiteSupport,
  SiteSupportTitle,
  SiteSupportList,
  CopyRight,
};
