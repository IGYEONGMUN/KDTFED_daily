import { Outlet } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.ts";

function Root() {
  return (
    <>
      {/* 여기로 이사왔음 프로바이더 */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={true} />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
