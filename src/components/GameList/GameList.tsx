import React, {FC} from 'react';
import {IGameListProps} from "./IGameListProps";
import {Col, Row} from "react-grid-system";
import GameCard from "../GameCard/GameCard";
import style from './GameList.module.css'
import Link from "next/link";

const GameList: FC<IGameListProps> = ({games, title, layout}) => {
    return (
        <div className={style.gameList}>
            {title && <h2>{title}</h2>}
            <Row gutterWidth={20}>
                {games.map(item => (
                    <Col xs={12} sm={layout === 'horizontal' ? 6 : 4} style={{marginBottom: 20}} key={item.id}>
                        <Link href={`/game/${item.slug}`}>
                            <GameCard
                                image={item.shortImage}
                                title={item.title}
                                readableStatus={item.readableStatus}
                                status={item.status}
                                layout={layout}
                            />
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

GameList.defaultProps = {
    layout: 'horizontal'
}

export default GameList