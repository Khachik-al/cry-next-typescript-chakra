import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "../styles/theme.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp