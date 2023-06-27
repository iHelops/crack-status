import React, {FC} from 'react';
import {IStatisticProps} from "./IStatisticProps";
import style from './Statistic.module.css'

const Statistic: FC<IStatisticProps> = ({title, value, valueStyle}) => {
    return (
        <div className={style.statistic}>
            <span className={style.title}>{title}</span>
            <div className={style.value} style={valueStyle}>{value}</div>
        </div>
    );
};

export default Statistic;