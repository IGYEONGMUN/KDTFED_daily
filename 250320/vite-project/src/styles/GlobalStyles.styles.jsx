import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
${reset}

:root{
  --light-color : #fff;
  --dark-color : #000;
  --accent-color:#dc143c;

}
`;

export default GlobalStyles;
