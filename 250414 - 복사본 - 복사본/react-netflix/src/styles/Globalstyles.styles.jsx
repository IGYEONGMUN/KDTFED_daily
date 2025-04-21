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
  color:inherit;
}
html{
  font-size:62.5%;

}
body{
  width: 100%;
  height:2000px;
  font-size:1.6rem;
  background: var(--dark-color);
  font-family: 'Roboto', sans-serif;
}
:root{
  --light-color: #fff;
  --dark-color: #000;
  --accent-color:#d91921;
  --border-color:#ccc;
}
`;

export default GlobalStyles;
