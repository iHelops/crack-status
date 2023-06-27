import React, {FC} from 'react';
import {IGameHeaderProps} from "./IGameHeaderProps";
import style from './GameHeader.module.css'
import Image from "next/image";
import Tag from "../Tag/Tag";
import {statusColors} from "../../helpers/status-colors";

const GameHeader: FC<IGameHeaderProps> = ({title, status, readableStatus, image, ...props}) => {
    return (
        <div {...props} className={style.gameHeader}>
            <Image src={image} alt='' width={0} height={0} sizes="100vw" className={style.image}/>
            <div className={style.info}>
                <h2>{title}</h2>
                <Tag color={statusColors[status]} text={readableStatus}/>
            </div>
        </div>
    );
};

export default GameHeader;