import React, {FC} from 'react';
import {IGameCardProps} from "./IGameCardProps";
import style from './GameCard.module.css'
import Image from "next/image";
import Tag from "../Tag/Tag";
import {statusColors} from "../../helpers/status-colors";
import Card from "../Card/Card";

const GameCard: FC<IGameCardProps> = ({layout, status, readableStatus, title, image}) => {
    const isVertical = layout === 'vertical'

    const getWrapper = (children: React.ReactNode) => (
        <div className={style.cardWrapper}>
            <Image src={image} alt='' width={150} height={150} className={style.blurImage}/>
            {children}
        </div>
    )

    const card = (
        <Card className={`${style.card} ${isVertical && style.vertical}`}>
            <div className={style.image}>
                <Image
                    src={image}
                    alt=''
                    fill
                    priority
                    sizes='(max-width: 425px) 384px, 33vw'
                />
            </div>
            <div className={style.info}>
                <h3>{title}</h3>
                <Tag color={statusColors[status]} text={readableStatus}/>
            </div>
        </Card>
    );

    return isVertical ? getWrapper(card) : card
}

GameCard.defaultProps = {
    layout: 'horizontal'
}

export default GameCard