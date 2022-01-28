import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Container from "../Container";
import { SiteSupportLinks } from "../../data";
import {
  FooterWrap,
  SiteSupport,
  SiteSupportTitle,
  SiteSupportList,
  CopyRight,
} from "./FooterStyle";

function Footer() {
  // 獲取Footer
  const FooterRef = useRef<HTMLDivElement>(null);
  // 判斷Footer顯示
  const [showFooter, setShowFooter] = useState(false);
  // 判斷List開啟或關閉
  const [showSiteLinks, setShowSiteLinks] = useState(false);
  // 設置滾動高度狀態
  const [scrollTopHeight, setScrollTopHeight] = useState(0);
  // 設置螢幕高度狀態
  const [screenHeight, setScreenHeight] = useState(0);

  // 如果滾動高度 + 螢幕高度 > Footer距離頂部的高度 就設置true顯示
  const handleAreaShow = useCallback(() => {
    if (scrollTopHeight + screenHeight > FooterRef.current!.offsetTop) {
      setShowFooter(true);
    }
  }, [scrollTopHeight, screenHeight]);

  // 控制滾動狀態
  const handleScrollTop = useCallback(() => {
    // 設置滾動高度
    setScrollTopHeight(document.documentElement.scrollTop);
    // 設置螢幕高度
    setScreenHeight(document.documentElement.clientHeight);
    // 判斷Footer開啟
    handleAreaShow();
  }, [handleAreaShow]);

  useEffect(() => {
    // 一掛載就設置
    handleScrollTop();
    // 滾動事件
    window.addEventListener("scroll", handleScrollTop);
  }, [handleScrollTop]);

  return (
    <FooterWrap ref={FooterRef} showFooter={showFooter}>
      <Container>
        <SiteSupport>
          {/* 根據showSiteLinks 點擊標題做List顯示或關閉  */}
          <SiteSupportTitle
            onClick={() => {
              showSiteLinks ? setShowSiteLinks(false) : setShowSiteLinks(true);
            }}
          >
            <div></div>
            <h3>SITE SUPPORT</h3>
            {/* 切換上下箭頭 */}
            {showSiteLinks ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </SiteSupportTitle>
          <SiteSupportList showSiteLinks={showSiteLinks}>
            {SiteSupportLinks.map((v, i) => {
              return (
                <Link href="javascript:void(0)" key={i}>
                  <a>
                    <li>
                      <MdKeyboardArrowRight />
                      <p>{v}</p>
                    </li>
                  </a>
                </Link>
              );
            })}
          </SiteSupportList>
        </SiteSupport>
        <CopyRight>&copy;乃木坂46LLC ©Sony Music Solutions Inc. </CopyRight>
      </Container>
    </FooterWrap>
  );
}

export default Footer;
