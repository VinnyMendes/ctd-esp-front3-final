import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "components/layouts/layout-general";
import { theme } from "styles/material-theme";
import { CheckoutContextProvider } from "context/checkout.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CheckoutContextProvider>
        <CssBaseline />
        <LayoutGeneral>
          <Component {...pageProps} />
        </LayoutGeneral>
        <style jsx global>{`
        /* Other global styles such as 'html, body' etc... */
        
        #__next {
          height: 100%;
        }
        `}</style>
      </CheckoutContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
