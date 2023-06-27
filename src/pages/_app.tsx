import '../fonts.css'
import '../global.css'
import React from "react";
import Head from "next/head";
require('../config')

const App = ({Component, pageProps}) => {
    const Layout = Component.layout || React.Fragment

    return (
        <>
            <Head>
                <title>CrackStatus</title>
                <link rel="icon" href="/images/logo.svg"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App