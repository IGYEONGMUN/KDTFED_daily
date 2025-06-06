import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
