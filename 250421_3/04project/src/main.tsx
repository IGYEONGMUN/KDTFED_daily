import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme.ts";

createRoot(document.getElementById("root")!).render(
  // 프로바이더 통해서 전역에서 쓸수있음
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
