import React from 'react';
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mini porpject 01 </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charset="UTF-8" />
        <meta name="description" content="Mini project 01" />
        <meta name="keywords" content="Project" />
        <meta name="author" content="suntiver" />

        <link
          href="https://fonts.googleapis.com/css2?family=Mitr&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
