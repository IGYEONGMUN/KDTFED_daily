import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

*{
  box-sizing:border-box;
}
ul,li{
  list-style:none;
}
a{
  text-decoration: none;
}
:root{
  --dark-color:#000;
  --light-color:#fff;
  --border-color:#ccc;
  --accent-color:#dc143c;
}
html{
  font-size:62.5%
}
body{
  font-size:1.6rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default GlobalStyles;
