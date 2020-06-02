import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4ede8;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
`;
