import React, { useState, useEffect, useCallback, useRef } from "react";
import type { NextPage } from "next";
import LazyLoad from "react-lazyload";
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
  newsData,
  profileData,
  ScheduleCalendarDate,
  ScheduleCalendarData,
  FanCludOptions,
} from "../data";
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

const Home: NextPage = () => {
  // 獲取各個區域 判斷顯示
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

  // 載入中
  const [isLoading, setIsLoading] = useState(true);
  // 滾動高度
  const [scrollTopHeight, setScrollTopHeight] = useState(0);
  // 螢幕高度
  const [screenHeight, setScreenHeight] = useState(0);
  // 日期的index
  const [circleNumber, setCircleNumber] = useState(0);

  // console.log(circleNumber);
  // console.log(showSiteLinks);

  // 控制各區域顯示的函式
  // 滾動高度 + (螢幕高度 / 2) > 該區域距離頂部的高度 即顯示
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

  // 設置滾動高度和螢幕高度 並調用各區域顯示函式
  const handleScrollTop = useCallback(() => {
    setScrollTopHeight(document.documentElement.scrollTop);
    setScreenHeight(document.documentElement.clientHeight);
    // console.log("scrollTopHeight", scrollTopHeight);
    // console.log("screenHeight", screenHeight);
    handleAreaShow();
  }, [handleAreaShow]);

  // 掛載後0.3秒移除載入中
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // 一掛載就調用
  useEffect(() => {
    handleScrollTop();
    // 滾動事件
    window.addEventListener("scroll", handleScrollTop);
  }, [handleScrollTop]);
  return (
    <>
      {/* 設置網站名稱 */}
      <Head>
        <title>桜井玲香 OFFICIAL SITE & FANCLUB</title>
      </Head>
      {/* 載入中Bg */}
      <LoadingBg isLoading={isLoading} />
      {/* Header */}
      {/* 添加lazyload 隱藏住runtime */}
      <LazyLoad height={"100vh"}>
        <Header />
      </LazyLoad>
      {/* 右下角的Fixed圓形 */}
      <FixedJoin />
      {/* News區域 */}
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
      {/* Profile區域 */}
      <Profile ref={ProfileRef} showProfile={showProfile}>
        <Container>
          <ProfileFlex>
            <ProfileTitle>
              <h2>PROFILE</h2>
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
      {/* Schedule區域 */}
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
      {/* FanClud區域 */}
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
                        {/* 前面的橫線 */}
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
      {/* Sns區域 */}
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
