import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "#fff",
  background: "#000",
};
const lightTheme = {};

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
