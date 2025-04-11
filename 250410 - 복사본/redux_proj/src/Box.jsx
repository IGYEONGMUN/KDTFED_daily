import React from "react";
import { useSelector } from "react-redux";
import GrandBox from "./GrandBox";

const Box = () => {
  // 초기값 1
  const count = useSelector((state) => state.count);
  return (
    <>
      <div>
        box{count}
        <GrandBox />
      </div>
    </>
  );
};

export default Box;
