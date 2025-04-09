import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// 최상위 부모역할
const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
