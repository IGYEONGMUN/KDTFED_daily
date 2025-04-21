import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }

ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
html{
  font-size:62.5%;
}
body{
  font-size:1.6rem;
}

:root{
  --dark-color:#000;
  --light-color:#fff;
  --accent-color:#dc1437;
  --border-color : #ccc;
}
`;

export default GlobalStyles;
