import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  console.log(user);
  // 유저가 있으면 즉 파이어베이스 안에 저장된 값이 있으면 라우터 트리상 칠드런에 보내줌
  // if (!user) {
  //   return <Navigate to={"/login"} />;
  // }
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
