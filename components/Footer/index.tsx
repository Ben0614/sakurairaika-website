import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Container from "../Container";

import {
  FooterWrap,
  SiteSupport,
  SiteSupportTitle,
  SiteSupportList,
  CopyRight,
} from "./FooterStyle";

const SiteSupportLinks = [
  "お問い合わせ",
  "会員サービス利用規約",
  "通信販売利用規約",
  "特定商取引法に基づく表記",
  "推奨環境",
  "個人情報について",
  "ログイン",
  "会員登録",
  "会員退会",
  "機種変更",
];

function Footer() {
  const FooterRef = useRef<HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);
  const [showSiteLinks, setShowSiteLinks] = useState(false);
  const [scrollTopHeight, setScrollTopHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const handleAreaShow = useCallback(() => {
    if (scrollTopHeight + screenHeight  > FooterRef.current!.offsetTop) {
      setShowFooter(true);
    }
  }, [scrollTopHeight, screenHeight]);

  const handleScrollTop = useCallback(() => {
    setScrollTopHeight(document.documentElement.scrollTop);
    setScreenHeight(document.documentElement.clientHeight);
    handleAreaShow();
  }, [handleAreaShow]);

   useEffect(() => {
     handleScrollTop();
     window.addEventListener("scroll", handleScrollTop);
   }, [handleScrollTop]);

  return (
    <FooterWrap ref={FooterRef} showFooter={showFooter}>
      <Container>
        <SiteSupport>
          <SiteSupportTitle
            onClick={() => {
              showSiteLinks ? setShowSiteLinks(false) : setShowSiteLinks(true);
            }}
          >
            <div></div>
            <h3>SITE SUPPORT</h3>
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
