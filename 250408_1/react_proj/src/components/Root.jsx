import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>HelloRoot</div>
      {/* 뒤에 붙는 동적경로에 따라서 자식컴포넌트에 보낼수있다 */}
      <Outlet />
    </>
  );
};

export default Root;
