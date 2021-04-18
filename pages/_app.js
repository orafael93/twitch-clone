import "../styles/globals.css";

import { GlobalStyles } from "../styles/globals";
import { ContextProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Component {...pageProps} />;
        <GlobalStyles />
      </ContextProvider>
    </>
  );
}

export default MyApp;
