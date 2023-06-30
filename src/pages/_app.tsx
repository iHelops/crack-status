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
                <title>Взлом новых игр: статус взлома Denuvo - CrackStatus</title>
                <meta name="description" content='Последняя информация о новых взломах игр от EMPRESS, Codex, CPY. На CrackStatus вы найдете информацию о взломах более 15 тысяч игр для ПК.' />
                <link rel="icon" href="/images/favicon.svg" type='image/svg+xml'/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App