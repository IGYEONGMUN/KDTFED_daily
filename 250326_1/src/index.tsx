import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
      box-sizing: border-box;
    }

    ul, li {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    :root {
      --light-color: #fff;
      --circle-color:#00a5ff;
    }

    body {
      width: 100%;
      height: 100vh;
      font-family: "Source Sans 3", sans-serif;
      background: linear-gradient(135deg, #e09, #d0e);
    }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
