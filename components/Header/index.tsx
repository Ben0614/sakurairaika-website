import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import FixedMenu from "../FixedMenu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { OfficialSiteData, FanCludOptions } from "../../data";
import {
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
} from "./HeaderStyle";

function Header() {
  // 設置螢幕寬度
  const [screenWidth, setScreenWidth] = useState(0);
  // 判斷開啟Menu的Nav
  const [showMenuList, setShowMenuList] = useState(false);
  // 判斷顯示Header
  const [showHeader, setShowHeader] = useState(false);

  // 設置螢幕寬度狀態
  const setWidth = () => {
    setScreenWidth(document.documentElement.clientWidth);
  };

  // 掛載後0.3秒顯示Header
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 300);
  }, []);

  // 一掛載就設置螢幕寬度
  useEffect(() => {
    setWidth();
    // 螢幕大小事件
    window.addEventListener("resize", setWidth);
    // console.log(screenWidth);
  }, [screenWidth]);
  return (
    <>
      <HeaderWrap showHeader={showHeader}>
        <FixedMenu
          showMenuList={showMenuList}
          setShowMenuList={setShowMenuList}
        />
        <FixedList showMenuList={showMenuList}>
          <FixedListImg>
            {/* 根據螢幕寬度判斷要顯示mobile圖片或computer圖片 */}
            <Image
              src={
                screenWidth >= 1375
                  ? `/images/computer/gnavi_img_pc.jpg`
                  : `/images/mobile/gnavi_img_sp.jpg`
              }
              alt=""
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              sizes={screenWidth >= 1375 ? `50vw` : `110vw`}
            ></Image>
          </FixedListImg>
          <FixedContainer>
            <OfficalSite>
              <h3 className="title">OFFICIAL SITE</h3>
              <ul>
                {OfficialSiteData.map((v, i) => {
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
              </ul>
            </OfficalSite>
            <Fanclub>
              <h3 className="title">FANCLUB</h3>
              <ul>
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
              </ul>
            </Fanclub>
            <Sns>
              <h3 className="title">SNS</h3>
              <div className="links">
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
              </div>
            </Sns>
          </FixedContainer>
        </FixedList>
        <Member>
          <Link href="javascript:void(0)">
            <a>
              <MdKeyboardArrowRight />
              <p>LOGIN</p>
            </a>
          </Link>
          <Link href="javascript:void(0)">
            <a>
              <MdKeyboardArrowRight />
              <p>JOIN</p>
            </a>
          </Link>
        </Member>
        <Logo>
          <Image
            src="/images/logo_main.svg"
            alt=""
            height={screenWidth >= 1375 ? 220 : 95}
            width={screenWidth >= 1375 ? 425 : 190}
          ></Image>
        </Logo>
        <MainImg>
          <Image
            src={
              screenWidth >= 1375
                ? `/images/computer/mainimg_pc.jpg`
                : `/images/mobile/mainimg_sp.jpg`
            }
            alt=""
            layout="fill"
            objectFit={`cover`}
            // 圖片焦點位置
            objectPosition={screenWidth >= 1375 ? `top` : ``}
          />
        </MainImg>
      </HeaderWrap>
    </>
  );
}

export default Header;
