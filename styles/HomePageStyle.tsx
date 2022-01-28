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

const LoadingBg = styled.div<Props>`
  position: fixed;
  top: 0;
  left: ${(props) => (props.loading ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 10000;
  transition: 0.5s;
  ${(props) => props.theme.screens.lg} {
    transition: 1s;
  }
`;

const News = styled.div<Props>`
  opacity: ${(props) => (props.showNews ? 1 : 0)};
  transition: 1s;
  padding: ${(props) => props.theme.pd(12)} 0;
  ${(props) => props.theme.screens.lg} {
    padding: ${(props) => props.theme.pd(30)} 0;
  }
`;
const NewsFlex = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
  }
`;
const NewsTitle = styled.div`
  margin: 0 0 ${(props) => props.theme.mg(12)};
  h2 {
    font-size: ${(props) => props.theme.fz(8) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(8)) + "px"};
    letter-spacing: ${(props) => props.theme.letters.title};
  }
  ${(props) => props.theme.screens.lg} {
    width: 30%;
    h2 {
      font-size: ${(props) => props.theme.fz(15) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(15)) + "px"};
      margin: 0 0 ${(props) => props.theme.mg(20)};
    }
  }
`;
const NewsItemGroup = styled.div`
  margin: 0 0 ${(props) => props.theme.mg(12)} 0;
  ${(props) => props.theme.screens.lg} {
    width: 70%;
    margin: 0;
  }
`;
const NewsItem = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: ${(props) => props.theme.mg(5)};
  padding-bottom: ${(props) => props.theme.pd(5)};
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
const NewsDataCategory = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fz(1) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
  margin: 0 0 ${(props) => props.theme.mg(3)} 0;
  p {
    margin: 0;
  }
  p:last-child {
    color: #e3934d;
    border-left: 1px solid #ccc;
    padding-left: ${(props) => props.theme.pd(2)};
    margin-left: ${(props) => props.theme.mg(2)};
  }
`;
const NewsItemTitle = styled.h4`
  font-size: ${(props) => props.theme.fz(1) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
  margin: 0 0 ${(props) => props.theme.mg(1)};
`;
const NewsItemContent = styled.p`
  font-size: ${(props) => props.theme.fz() + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
`;
const Profile = styled(News)`
  opacity: ${(props) => (props.showProfile ? 1 : 0)};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.showProfile ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    background-color: #fbf7f7;
    z-index: -1;
    transition: 1.5s;
  }
  ${(props) => props.theme.screens.lg} {
    &::after {
      left: ${(props) => (props.showProfile ? "-28%" : "-100%")};
    }
  }
`;
const ProfileFlex = styled(NewsFlex)``;
const ProfileTitle = styled(NewsTitle)``;
const ProfileImg = styled.div`
  position: relative;
  padding-top: 100%;
  margin: 0 auto ${(props) => props.theme.mg(6)};
  ${(props) => props.theme.screens.lg} {
    order: 2;
    width: 30%;
    padding-top: 45%;
  }
`;
const ProfileContent = styled.div`
  margin-bottom: ${(props) => props.theme.mg(12)};
  .name {
    display: flex;
    align-items: flex-end;
    margin: 0 auto ${(props) => props.theme.mg(6)};
    span:nth-child(1) {
      font-size: ${(props) => props.theme.fz(5) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
      letter-spacing: ${(props) => props.theme.letters.name};
    }
    span:nth-child(2) {
      font-size: ${(props) => props.theme.fz() + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
      letter-spacing: ${(props) => props.theme.letters.pinYin};
      margin: 0 0 0 ${(props) => props.theme.mg(3)};
    }
  }
  ${(props) => props.theme.screens.lg} {
    width: 40%;
  }
`;
const ProfileContentList = styled.ul`
  li {
    margin: 0 0 ${(props) => props.theme.mg(3)} 0;
    span {
      display: inline-block;
      width: 25%;
    }
  }
  li:last-child {
    margin: 0;
  }
`;

const Schedule = styled(News)`
  opacity: ${(props) => (props.showSchedule ? 1 : 0)};
  background-color: #fff;
`;
const ScheduleFlex = styled(NewsFlex)``;
const ScheduleTitle = styled(NewsTitle)``;
const ScheduleContent = styled.div`
  ${(props) => props.theme.screens.lg} {
    width: 70%;
  }
`;
const ScheduleCalendar = styled.div`
  width: 80%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0 0 ${(props) => props.theme.mg(8)} auto;
  > a:nth-child(3) ~ a {
    display: none;
  }
  ${(props) => props.theme.screens.lg} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 30px;
    margin: 0 auto ${(props) => props.theme.mg(8)} auto;
    a:nth-child(3) ~ a {
      display: block;
    }
  }
`;
const ScheduleCalendarCircle = styled.div<Props>`
  margin: 0 auto;
  text-align: center;
  > p {
    text-align: left;
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
  }
  > div {
    background-color: ${(props) =>
      props.showNumber ? "#dc8fa4" : "transparent"};
    color: ${(props) => (props.showNumber ? "#fff" : "#000")};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    padding: ${(props) => props.theme.pd(2)} 0;
    ${(props) => props.theme.screens.lg} {
      width: 120px;
      height: 120px;
      padding: ${(props) => props.theme.pd(6)} 0;
    }
    transition: 0.1s;
    &:hover {
      background-color: #dc8fa4;
      color: #fff;
    }
    > p:nth-child(1) {
      font-size: ${(props) => props.theme.fz(5) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
      ${(props) => props.theme.screens.lg} {
        font-size: ${(props) => props.theme.fz(10) + "px"};
        line-height: ${(props) => props.theme.lh(props.theme.fz(10)) + "px"};
      }
    }
    > p:nth-child(2) {
      color: #e3e3e3;
      font-size: ${(props) => props.theme.fz() + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    }
  }
`;
const ScheduleItemGroup = styled.div``;
const ScheduleItem = styled.div<Props>`
  display: ${(props) => (props.showNumber ? "block" : "none")};
  width: 80%;
  margin: 0 0 ${(props) => props.theme.mg(12)} auto;
  border-bottom: 1px dotted #e4c8c8;
  font-size: ${(props) => props.theme.fz(1) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
  ${(props) => props.theme.screens.lg} {
    margin: 0 auto ${(props) => props.theme.mg(8)} auto;
  }
  p:nth-child(1) {
    margin-bottom: ${(props) => props.theme.mg(2)};
  }
  > a > p {
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const FanClud = styled(News)`
  opacity: ${(props) => (props.showFanClud ? 1 : 0)};
  position: relative;
  overflow: hidden;
  margin: 0 0 ${(props) => props.theme.mg(12)} 0;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.showFanClud ? "25%" : "100%")};
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #eadece;
    transition: 1.5s;
  }
`;
const FanCludTitle = styled(NewsTitle)``;
const FanCludContent = styled.div`
  display: flex;
  ${(props) => props.theme.screens.lg} {
    align-items: center;
  }
`;
const FanCludMember = styled.ul`
  width: 40%;

  li {
    display: flex;
    align-items: center;
    margin: 0 0 ${(props) => props.theme.mg(6)} 0;
    svg {
      color: #eeb5c4;
      ${(props) => props.theme.screens.lg} {
        display: none;
      }
    }
    ${(props) => props.theme.screens.lg} {
      position: relative;
      &::after,
      &::before {
        transition: 0.3s;
        content: "";
        position: absolute;
        bottom: -30%;
        left: 0;
        width: 60%;
        height: 1px;
        background-color: #000;
      }
      &::before {
        width: 0;
        height: 2px;
      }
      &:hover::before {
        width: 10%;
      }
    }
    p {
      letter-spacing: ${(props) => props.theme.letters.link};
    }
  }
`;
const FanCludNav = styled.ul`
  width: 60%;
  > a > li {
    display: flex;
    align-items: center;
    margin: 0 0 ${(props) => props.theme.mg(6)} 0;
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
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
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transform: translateY(-35%);
    > a {
      width: 35%;
    }
  }
`;
const Sns = styled(News)`
  opacity: ${(props) => (props.showSns ? 1 : 0)};
`;
const SnsTitle = styled(NewsTitle)`
  text-align: center;
  ${(props) => props.theme.screens.lg} {
    margin: 0 auto;
    h2 {
      margin: 0 0 ${(props) => props.theme.mg(12)};
    }
  }
`;
const SnsLinks = styled.div`
  text-align: center;
  svg {
    font-size: ${(props) => props.theme.fz(20) + "px"};
    color: #aaa;
    margin: 0 ${(props) => props.theme.mg(6)};
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
    ${(props) => props.theme.screens.lg} {
      margin: 0 ${(props) => props.theme.mg(10)};
    }
  }
`;



export {
  LoadingBg,
  News,
  NewsTitle,
  NewsItemGroup,
  NewsItem,
  NewsDataCategory,
  NewsItemTitle,
  NewsItemContent,
  Profile,
  ProfileTitle,
  ProfileImg,
  ProfileContent,
  ProfileContentList,
  Schedule,
  ScheduleTitle,
  ScheduleContent,
  ScheduleCalendar,
  ScheduleCalendarCircle,
  ScheduleItemGroup,
  ScheduleItem,
  FanClud,
  FanCludTitle,
  FanCludContent,
  FanCludMember,
  FanCludNav,
  Sns,
  SnsTitle,
  SnsLinks,
  NewsFlex,
  ProfileFlex,
  ScheduleFlex,
};
