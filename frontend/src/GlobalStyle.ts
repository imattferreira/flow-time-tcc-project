import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  input, 
  button {
    border: none;
    outline: none;
    font-family: 'Lato', sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    background: #DFF3F1;
    width: 100vw;
    height: 100vh;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }
`;
