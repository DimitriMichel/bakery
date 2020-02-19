import '../sass/styles.sass'
import React from "react";

// This default export is required in a new `pages/_app.js` file.
// This page is used for Global SASS Styling
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}
