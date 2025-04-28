import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Root from "./Root.tsx";
import { RecoilRoot } from "recoil";
import { defaultTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  // atoms는 밑에 요소들이 다 쓸 수 있음 - 리코일루트 이렇게 해주면
  <RecoilRoot>
    <ThemeProvider theme={defaultTheme}>
      <Root />
    </ThemeProvider>
  </RecoilRoot>
);
