import React, { Fragment } from "react";
import Head from "next/head";

function IndexPage() {
  return (
    <Fragment>
      <Head>
        <title>Heavenly Desserts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
      </Head>
    </Fragment>
  );
}

export default IndexPage;
