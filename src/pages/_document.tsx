import React from 'react';
import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang='ru'>
            <Head/>
            <body>
                <Main/>
                <div id="portal"/>
                <NextScript/>
            </body>
        </Html>
    )
}