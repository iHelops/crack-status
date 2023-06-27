import {GameStatus} from "../../models/game";
import React from "react";

export interface IGameHeaderProps extends React.ComponentProps<'div'> {
    image: string,
    title: string,
    readableStatus: string,
    status: GameStatus
}