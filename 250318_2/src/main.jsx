import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
  /* 앱 컴포넌트 기반으로 페이지분기 */
);
