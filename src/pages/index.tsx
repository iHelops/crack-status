import React from 'react';
import GamesApi from "../api/games";
import GameList from "../components/GameList/GameList";
import Layout from "../components/Layout/Layout";
import {IIndexProps, Page} from "../models/pages";
import Head from "next/head";

const Index: Page<IIndexProps> = ({games}) => {
    const keywords = [
        ...games.hots,
        ...games.popular,
        ...games.unreleased
    ].map(item => item.title).join(', ')

    return (
        <>
            <Head>
                <meta name="keywords" content={keywords}/>
                <meta name="yandex-verification" content="1c9c57f7b93887bd" />
            </Head>
            <GameList layout='vertical' games={games.popular}/>
            <GameList title='Популярные' games={games.hots}/>
            <GameList title='Ближайшие релизы' games={games.unreleased}/>
        </>
    );
}

Index.layout = Layout
export default Index

export const getServerSideProps = async ({res}) => {
    res.setHeader('Cache-Control', 'public, s-maxage=60')

    const games = await GamesApi.getGameList()

    return {
        props: {
            games: JSON.parse(JSON.stringify(games))
        }
    }
}