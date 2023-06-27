import React, {FC} from 'react';
import {ITagProps} from "./ITagProps";
import style from './Tag.module.css'

const Tag: FC<ITagProps> = ({color, text}) => {
    return (
        <div className={style.tag}>
            <div className={style.color} style={{background: color}}></div>
            <span className={style.text}>{text}</span>
        </div>
    );
}

export default Tag