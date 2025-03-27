import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import ReactDOM from "react-dom/client";
import App from "./App";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

${reset}

*{
  box-sizing:border-box;

}

ul,li{
  list-style:none;
}

a{
  color:inherit;
  text-decoration: none;
}

:root{
  --light-color:#fff;
}

body{
  width: 100%;
  height: 100vh;
  font-family:"Source Sans 3";
  background: linear-gradient(135deg,#e09,#d0e);
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
