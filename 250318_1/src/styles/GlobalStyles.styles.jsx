import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
//전역변수로 styled-components사용

// npm i styled-reset
const GlobalStyles = createGlobalStyle`
${reset}
  :root{
    --primary-light-color:#fff;
    --primary-dark-color:#000;
    --border-color:#ccc;
  }
`;

export default GlobalStyles;
