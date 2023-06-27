import {GameStatus} from "../../models/game";

export interface IGameCardProps {
    layout?: 'horizontal' | 'vertical',
    image: string,
    title: string,
    readableStatus: string,
    status: GameStatus
}