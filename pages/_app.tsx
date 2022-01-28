import { GlobalStyle } from "../styles/globals";
import { theme } from "../styles/variable";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
