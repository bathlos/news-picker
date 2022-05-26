import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  html {
    font-size: 62.5%; 
    scroll-behavior: smooth;
  }
  
  body{
    font-size: 1.6rem;
  }
`;
