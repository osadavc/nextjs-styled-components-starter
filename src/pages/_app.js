import { Fragment } from "react";
import { GlobalStyles } from "../utils/globalStyles";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
