import "../styles/globals.css";
import Head from "next/head";
import React from "react";
// import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = React.useState(false);

  React.useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) return null;

  if (typeof window === undefined) return <></>;

  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/icon/icon.svg" type="image/x-icon" />
        <title>Gemasting</title>
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
