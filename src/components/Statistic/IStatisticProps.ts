import {CSSProperties} from "react";

export interface IStatisticProps {
    title: string,
    value: string | number,
    valueStyle?: CSSProperties
}