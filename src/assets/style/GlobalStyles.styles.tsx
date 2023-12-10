import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
  }

  body {
    width:100%;
    min-height:100vh;
  }
`;

export default GlobalStyle;
