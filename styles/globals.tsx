import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${normalize}
* {
  box-sizing: border-box;
  font-family: 'Poppins','Noto Sans JP', sans-serif;
}
html,
body {
  padding: 0;
  margin: 0;
  color:#464646;
}
a {
  text-decoration: none;
  color:#464646;
}
ul{
  list-style-type: none;
  padding: 0;
  margin: 0
}

h1,h2,h3,h4,h5{ 
  margin: 0;
}
p{ 
  margin: 0;
}

`;
