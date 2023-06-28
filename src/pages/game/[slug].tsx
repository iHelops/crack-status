import React from 'react';
import {IGameProps, Page} from "../../models/pages";
import Layout from "../../components/Layout/Layout";
import GamesApi from "../../api/games";
import GameHeader from "../../components/GameHeader/GameHeader";
import GameStats from "../../components/GameStats/GameStats";
import Head from "next/head";

const Game: Page<IGameProps> = ({game}) => {
    const title = `Статус взлома ${game.title} - CrackStatus`

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={`${game.title}, ${game.hackedGroups.join(', ')}, ${game.protections.join(', ')}`} />
                <meta name="description" content={game.description} />
            </Head>

            <GameHeader
                image={game.shortImage}
                title={game.title}
                readableStatus={game.readableStatus}
                status={game.status}
                style={{marginBottom: 20}}
            />

            <GameStats game={game}/>

            <div style={{marginTop: 50}}>
                <h2 style={{marginBottom: 20}}>Описание</h2>
                <p>{game.description}</p>
            </div>

            {game.specsInfo.length > 0 && (
                <div style={{marginTop: 50}}>
                    <h2 style={{marginBottom: 20}}>Характеристики</h2>
                    <table>
                        <tbody>
                        {game.specsInfo.map((item, index) => (
                            <tr key={index}>
                                <td style={{width: '30%', minWidth: '150px'}}>{item.device}</td>
                                <td style={{wordBreak: 'break-all'}}>{item.model}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

Game.layout = Layout
export default Game;

export const getServerSideProps = async ({res, params}) => {
    res.setHeader('Cache-Control', 'public, s-maxage=60')

    const game = await GamesApi.getGame(params.slug)

    return {
        props: {
            game: JSON.parse(JSON.stringify(game))
        }
    }
}