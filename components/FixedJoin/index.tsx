import React from "react";
import LazyLoad from "react-lazyload";
import { FixedJoinWrap } from "./FixedJoinStyle";
import Image from "next/image";

function FixedJoin() {
  return (
    <>
      <FixedJoinWrap>
        {/* 這裡用bg做 但也可以用Image*/}
        {/* <Image src="/images/join.png" alt="" height={130} width={130}></Image> */}
      </FixedJoinWrap>
    </>
  );
}

export default FixedJoin;
