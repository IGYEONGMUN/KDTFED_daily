import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

function Root() {
  return (
    <>
      {/* 여기로 이사왔음 프로바이더 */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
