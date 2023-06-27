import {IFullGame, IGame} from "./game";
import {NextPage} from "next";
import {FC, ReactNode} from "react";

export type PageAttributes = {
    layout?: ReactNode | FC
}

export type Page<T = {}> = NextPage<T> & PageAttributes


// PAGES PROPS
export interface IIndexProps {
    games: {
        hots: IGame[],
        popular: IGame[],
        unreleased: IGame[]
    }
}

export interface IGameProps {
    game: IFullGame
}