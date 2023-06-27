import React, {CSSProperties, FC} from 'react';
import {IGameStatsProps} from "./IGameStatsProps";
import {Col, Row} from "react-grid-system";
import Statistic from "../Statistic/Statistic";
import Card from "../Card/Card";
import {formatDate} from "../../helpers/format-date";

interface IStat {
    title: string,
    value: string | number,
    visible?: boolean,
    valueStyle?: CSSProperties
}

const GameStats: FC<IGameStatsProps> = ({game}) => {
    const stats: IStat[] = [
        {
            title: 'Дата релиза',
            value: formatDate(game.releaseDate),
        },
        {
            title: 'Защита',
            value: game.protections.join(', '),
            valueStyle: { textTransform: 'uppercase' }
        },
        {
            title: 'Кем взломана',
            value: game.hackedGroups.join(', '),
            visible: game.status === 'cracked'
        },
        {
            title: 'Дата взлома',
            value: formatDate(game.crackDate),
            visible: game.status === 'cracked'
        },
        {
            title: 'MetaScore',
            value: game.metaScore,
            visible: !!game.metaScore
        },
        {
            title: 'UserScore',
            value: game.userScore,
            visible: !!game.userScore
        }
    ]

    return (
        <Card size='large'>
            <Row gutterWidth={20} style={{rowGap: 20}}>
                {stats.map((item, index) => {
                    if (item.visible === false) return null
                    return (
                        <Col xs={12} sm={6} md={3} key={index}>
                            <Statistic title={item.title} value={item.value} valueStyle={item.valueStyle}/>
                        </Col>
                    )
                })}
            </Row>
        </Card>
    );
};

export default GameStats;