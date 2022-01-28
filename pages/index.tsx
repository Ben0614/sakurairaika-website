import React, { useState, useEffect, useCallback, useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import FixedJoin from "../components/FixedJoin";
import ViewAll from "../components/ViewAll";
import {
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
} from "../styles/HomePageStyle";

const newsData = [
  {
    date: "2022.01.23",
    category: "FANCLUB",
    title: "MOVIE更新!!｜2022 Calendar Shooting Making Movie",
    content: "MOVIEを更新しました!!動画はこちら是非ご覧ください！",
  },
  {
    date: "2022.01.22",
    category: "FANCLUB",
    title: "STAFF BLOG更新!!｜FLOWER DRUM SONG",
    content:
      "STAFF BLOGを更新しました!! タイトル：FLOWER DRUM SONG スタッフブ…",
  },
  {
    date: "2022.01.20",
    category: "FANCLUB",
    title: "STAFF BLOG更新!!｜カレンダー販売開始いたしました！",
    content:
      "STAFF BLOGを更新しました!! タイトル：カレンダー販売開始いたしました！スタッフブ…",
  },
  {
    date: "2022.01.20",
    category: "FANCLUB",
    title: "2022年度カレンダー本日より販売開始！",
    content:
      "2022年度カレンダーの予約受付を開始いたしました！桜井玲香からのメッセージはコチラ※予約受注商品の…",
  },
];
const profileData = [
  { title: "生年月日", content: "1994年5月16日" },
  { title: "出身地", content: "神奈川県" },
  { title: "血液型", content: "A型" },
  { title: "身長", content: "156cm" },
];
const ScheduleCalendarDate = [
  { date: "27", week: "THU", year_month: "2022.1 -" },
  { date: "28", week: "FRI", year_month: "2022.1 -" },
  { date: "03", week: "THU", year_month: "2022.2 -" },
  { date: "04", week: "FRI", year_month: "2022.2 -" },
  { date: "05", week: "SAT", year_month: "2022.2 -" },
  { date: "06", week: "SUN", year_month: "2022.2 -" },
];
const ScheduleCalendarData = [
  { category: "WEB", content: "「WEBザテレビジョン」" },
  { category: "STAGE", content: "KERA CROSS 第四弾『SLAPSTICKS』" },
  { category: "STAGE", content: "KERA CROSS 第四弾『SLAPSTICKS』" },
  { category: "STAGE", content: "KERA CROSS 第四弾『SLAPSTICKS』" },
  { category: "STAGE", content: "KERA CROSS 第四弾『SLAPSTICKS』" },
  { category: "STAGE", content: "KERA CROSS 第四弾『SLAPSTICKS』" },
];
const FanCludOptions = [
  "ABOUT",
  "STAFF BLOG",
  "GALLERY",
  "MOVIE",
  "うににゃん BLOG",
  "MESSAGE",
  "GOODS",
  "TICKET",
];

const Home: NextPage = () => {
  const NewsRef = useRef<HTMLDivElement>(null);
  const [showNews, setShowNews] = useState(false);
  const ProfileRef = useRef<HTMLDivElement>(null);
  const [showProfile, setShowProfile] = useState(false);
  const ScheduleRef = useRef<HTMLDivElement>(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const FanCludRef = useRef<HTMLDivElement>(null);
  const [showFanClud, setShowFanClud] = useState(false);
  const SnsRef = useRef<HTMLDivElement>(null);
  const [showSns, setShowSns] = useState(false);

  const [loading, setLoading] = useState(true);
  const [scrollTopHeight, setScrollTopHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [circleNumber, setCircleNumber] = useState(0);

  // console.log(circleNumber);
  // console.log(showSiteLinks);

  const handleAreaShow = useCallback(() => {
    if (scrollTopHeight + screenHeight / 2 > NewsRef.current!.offsetTop) {
      setShowNews(true);
    }
    if (scrollTopHeight + screenHeight / 2 > ProfileRef.current!.offsetTop) {
      setShowProfile(true);
    }
    if (scrollTopHeight + screenHeight / 2 > ScheduleRef.current!.offsetTop) {
      setShowSchedule(true);
    }
    if (scrollTopHeight + screenHeight / 2 > FanCludRef.current!.offsetTop) {
      setShowFanClud(true);
    }
    if (scrollTopHeight + screenHeight > SnsRef.current!.offsetTop) {
      setShowSns(true);
    }
  }, [scrollTopHeight, screenHeight]);

  const handleScrollTop = useCallback(() => {
    setScrollTopHeight(document.documentElement.scrollTop);
    setScreenHeight(document.documentElement.clientHeight);
    // console.log("scrollTopHeight", scrollTopHeight);
    // console.log("screenHeight", screenHeight);
    handleAreaShow();
  }, [handleAreaShow]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    handleScrollTop();
    window.addEventListener("scroll", handleScrollTop);
  }, [handleScrollTop]);
  return (
    <>
      <Head>
        <title>桜井玲香 OFFICIAL SITE & FANCLUB</title>
      </Head>
      <LoadingBg loading={loading} />
      <Header />
      <FixedJoin />
      <News ref={NewsRef} showNews={showNews}>
        <Container>
          <NewsFlex>
            <NewsTitle>
              <h2>News</h2>
              <ViewAll computer />
            </NewsTitle>
            <NewsItemGroup>
              {newsData.map((v, i) => {
                return (
                  <Link href="javascript:void(0)" key={i}>
                    <a>
                      <NewsItem key={i}>
                        <NewsDataCategory>
                          <p>{v.date}</p>
                          <p>{v.category}</p>
                        </NewsDataCategory>
                        <NewsItemTitle>{v.title}</NewsItemTitle>
                        <NewsItemContent>{v.content}</NewsItemContent>
                      </NewsItem>
                    </a>
                  </Link>
                );
              })}
            </NewsItemGroup>
          </NewsFlex>
        </Container>
        <ViewAll mobile />
      </News>
      <Profile ref={ProfileRef} showProfile={showProfile}>
        <Container>
          <ProfileFlex>
            <ProfileTitle>
              <h2>Profile</h2>
              <ViewAll computer />
            </ProfileTitle>
            <ProfileImg>
              <Image
                src="/images/profile.jpg"
                alt=""
                layout="fill"
                objectFit="contain"
              ></Image>
            </ProfileImg>
            <ProfileContent>
              <p className="name">
                <span>桜井 玲香</span>
                <span>REIKA SAKURAI</span>
              </p>
              <ProfileContentList>
                {profileData.map((v, i) => {
                  return (
                    <li key={i}>
                      <span>{v.title}</span>
                      {v.content}
                    </li>
                  );
                })}
              </ProfileContentList>
            </ProfileContent>
          </ProfileFlex>
        </Container>
        <ViewAll mobile />
      </Profile>
      <Schedule ref={ScheduleRef} showSchedule={showSchedule}>
        <Container>
          <ScheduleFlex>
            <ScheduleTitle>
              <h2>SCHEDULE</h2>
              <ViewAll computer />
            </ScheduleTitle>
            <ScheduleContent>
              <ScheduleCalendar>
                {ScheduleCalendarDate.map((v, i) => {
                  return (
                    <Link href="javascript:void(0)" key={i}>
                      <a
                        onClick={() => {
                          setCircleNumber(i);
                        }}
                      >
                        <ScheduleCalendarCircle
                          key={i}
                          showNumber={circleNumber === i ? true : false}
                        >
                          <div>
                            <p>{v.date}</p>
                            <p>{v.week}</p>
                          </div>
                          <p>{v.year_month}</p>
                        </ScheduleCalendarCircle>
                      </a>
                    </Link>
                  );
                })}
              </ScheduleCalendar>
              <ScheduleItemGroup>
                {ScheduleCalendarData.map((v, i) => {
                  return (
                    <ScheduleItem
                      key={i}
                      showNumber={circleNumber === i ? true : false}
                    >
                      <p className="category">{v.category}</p>
                      <Link href="javascript:void(0)" key={i}>
                        <a>
                          <p className="content">{v.content}</p>
                        </a>
                      </Link>
                    </ScheduleItem>
                  );
                })}
              </ScheduleItemGroup>
            </ScheduleContent>
          </ScheduleFlex>
        </Container>
        <ViewAll mobile />
      </Schedule>
      <FanClud ref={FanCludRef} showFanClud={showFanClud}>
        <Container>
          <FanCludTitle>
            <h2>FANCLUB</h2>
          </FanCludTitle>
          <FanCludContent>
            <FanCludMember>
              <Link href="javascript:void(0)">
                <a>
                  <li>
                    <MdKeyboardArrowRight />
                    <p>LOGIN</p>
                  </li>
                </a>
              </Link>
              <Link href="javascript:void(0)">
                <a>
                  <li>
                    <MdKeyboardArrowRight />
                    <p>JOIN</p>
                  </li>
                </a>
              </Link>
            </FanCludMember>
            <FanCludNav>
              {FanCludOptions.map((v, i) => {
                return (
                  <Link href="javascript:void(0)" key={i}>
                    <a>
                      <li>
                        <div></div>
                        <p>{v}</p>
                      </li>
                    </a>
                  </Link>
                );
              })}
            </FanCludNav>
          </FanCludContent>
        </Container>
      </FanClud>
      <Sns ref={SnsRef} showSns={showSns}>
        <Container>
          <SnsTitle>
            <h2>SNS</h2>
          </SnsTitle>
          <SnsLinks>
            <Link href="javascript:void(0)">
              <a>
                <BsInstagram />
              </a>
            </Link>
            <Link href="javascript:void(0)">
              <a>
                <BsTwitter />
              </a>
            </Link>
          </SnsLinks>
        </Container>
      </Sns>
      <Footer />
    </>
  );
};

export default Home;
