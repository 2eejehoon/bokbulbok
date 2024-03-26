import { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider as Provider } from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  html {
    background-color: whitesmoke;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  body {
    background-color: white;
    max-width:430px;
    min-height: 100vh;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  a {
    color: black;
    text-decoration: none;

  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    background: none;
  }

  .swiper-pagination-bullet {
    opacity: 1;
  }
`;

const theme = {};

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <Provider theme={theme}>{children}</Provider>;
}
