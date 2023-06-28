import React from 'react';
import {useRouter} from "next/router";
import SearchModal from '../components/Search/Search'
import {Page} from "../models/pages";
import Head from "next/head";

const Search: Page = () => {
    const router = useRouter()

    const onClose = () => router.push('/')

    return (
        <>
            <Head>
                <title>Поиск взломанных игр - CrackStatus</title>
            </Head>
            <SearchModal open onClose={onClose}/>
        </>
    );
}

export default Search