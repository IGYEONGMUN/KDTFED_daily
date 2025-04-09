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
html{
  font-size:62.5%;
}
body{
  width:100%;
  height:100vh;
  font-size:1.6rem;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0hVwl9mpMfQ1Ugi5YERKPdfGfG36PWPYnoA&s") center/cover no-repeat;
  display:flex;
  justify-content: center;
  align-items: center;
}

:root{
  --light-color:#fff;
  --dark-color:#000;
  --border-color:#ccc;
  --accent-color:#dc143c;
}
`;

export default GlobalStyles;
