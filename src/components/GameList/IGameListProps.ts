import {IGame, ISearchGame} from "../../models/game";

export interface IGameListProps {
    games: IGame[] | ISearchGame[],
    title?: string,
    layout?: 'horizontal' | 'vertical'
}