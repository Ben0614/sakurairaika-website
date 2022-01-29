import styled from "styled-components";

interface Props {
  showNumber?: boolean;
  isLoading?: boolean;
  showNews?: boolean;
  showProfile?: boolean;
  showSchedule?: boolean;
  showFanClud?: boolean;
  showSns?: boolean;
}

// 載入中Bg
const LoadingBg = styled.div<Props>`
  position: fixed;
  top: 0;
  /* 根據isLoading判斷 */
  left: ${(props) => (props.isLoading ? "0" : "-100%")};
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
  /* 根據showNews判斷 */
  opacity: ${(props) => (props.showNews ? 1 : 0)};
  transition: 1s;
  padding: ${(props) => props.theme.pd(12)} 0;
  ${(props) => props.theme.screens.lg} {
    padding: ${(props) => props.theme.pd(30)} 0;
  }
`;
// 桌機時添加flex
const NewsFlex = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
  }
`;
// 字形和margin都從函式設置
const NewsTitle = styled.div`
  margin: 0 0 ${(props) => props.theme.mg(12)};
  h2 {
    font-size: ${(props) => props.theme.fz(8) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(8)) + "px"};
    letter-spacing: ${(props) => props.theme.letters.title};
    font-weight: ${(props) => props.theme.fw.bigTitle};
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
    font-weight: ${(props) => props.theme.fw.en};
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
  font-family: ${(props) => props.theme.ff.jp};
  font-weight: ${(props) => props.theme.fw.jpTitle};
  margin: 0 0 ${(props) => props.theme.mg(1)};
`;
const NewsItemContent = styled.p`
  font-size: ${(props) => props.theme.fz() + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
  font-family: ${(props) => props.theme.ff.jp};
`;
const Profile = styled(News)`
  /* 根據showProfile判斷顯示 */
  opacity: ${(props) => (props.showProfile ? 1 : 0)};
  position: relative;
  /* 背景色 */
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
// 桌機時添加flex
const ProfileFlex = styled(NewsFlex)``;
const ProfileTitle = styled(NewsTitle)``;
const ProfileImg = styled.div`
  position: relative;
  padding-top: 100%;
  margin: 0 auto ${(props) => props.theme.mg(6)};
  ${(props) => props.theme.screens.lg} {
    /* 桌機 調整照片位置和大小 */
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
      font-family: ${(props) => props.theme.ff.jp};
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
    font-family: ${(props) => props.theme.ff.jp};
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
  /* 手機 3個一行 */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0 0 ${(props) => props.theme.mg(8)} auto;
  /* 手機只顯示3個 其餘的隱藏 */
  > a:nth-child(3) ~ a {
    display: none;
  }
  ${(props) => props.theme.screens.lg} {
    /* 桌機顯示6個 */
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 30px;
    margin: 0 auto ${(props) => props.theme.mg(8)} auto;
    /* 開啟隱藏 */
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
    /* 被點擊到的顯示粉紅色 */
    background-color: ${(props) =>
      props.showNumber ? "#dc8fa4" : "transparent"};
    /* 被點擊到的字顯示白色 */
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
    /* 觸碰到的也顯示粉紅和白 */
    &:hover {
      background-color: #dc8fa4;
      color: #fff;
    }
    /* 日期 */
    > p:nth-child(1) {
      font-size: ${(props) => props.theme.fz(5) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
      font-weight: ${(props) => props.theme.fw.scheduleDate};
      ${(props) => props.theme.screens.lg} {
        font-size: ${(props) => props.theme.fz(10) + "px"};
        line-height: ${(props) => props.theme.lh(props.theme.fz(10)) + "px"};
      }
    }
    /* 星期 */
    > p:nth-child(2) {
      color: #e3e3e3;
      font-size: ${(props) => props.theme.fz() + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
      font-weight: ${(props) => props.theme.fw.scheduleWeek};
    }
  }
`;
const ScheduleItemGroup = styled.div``;
const ScheduleItem = styled.div<Props>`
  /* 根據showNumber判斷顯示 */
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
    font-family: ${(props) => props.theme.ff.jp};
    &:hover {
      opacity: 0.7;
    }
  }
`;

const FanClud = styled(News)`
  /* 根據showFanClud判斷顯示 */
  opacity: ${(props) => (props.showFanClud ? 1 : 0)};
  position: relative;
  overflow: hidden;
  margin: 0 0 ${(props) => props.theme.mg(12)} 0;
  /* 背景色 */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: ${(props) => (props.showFanClud ? "22%" : "100%")};
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
    /* 手機 右箭頭 */
    svg {
      color: #eeb5c4;
      ${(props) => props.theme.screens.lg} {
        display: none;
      }
    }
    ${(props) => props.theme.screens.lg} {
      position: relative;
      /* 底線 */
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
      font-weight: ${(props) => props.theme.fw.en};
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
      font-weight: ${(props) => props.theme.fw.en};
      margin: 0 0 0 ${(props) => props.theme.mg(2)};
    }
  }
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* 桌機 Links區域往上一些 */
    transform: translateY(-35%);
    > a {
      width: 35%;
    }
  }
`;
const Sns = styled(News)`
  /* 根據showSns判斷開啟 */
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
