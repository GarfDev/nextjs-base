import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  #app {
    width: 100%;
  }
  body {
    align-items: center;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border-color: ${({ theme }) => theme.borderColor};
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default BaseStyle;
