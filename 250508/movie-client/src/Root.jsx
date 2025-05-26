import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default Root;
