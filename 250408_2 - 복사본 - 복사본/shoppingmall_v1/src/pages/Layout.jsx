import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// 최상위 부모역할
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
