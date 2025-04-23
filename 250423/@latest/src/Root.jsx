import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import GlobalStyles from "./styles/GlobalStyles.styles";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      {/* 자식요소로 보낼수가 있는데 컨텍스트 활용해서 스테이트도 보낼 수 있음 */}
      <Outlet />
    </>
  );
}

export default Root;
