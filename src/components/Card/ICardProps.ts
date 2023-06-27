import React from "react";

export interface ICardProps extends React.ComponentProps<'div'> {
    children?: React.ReactNode,
    size?: 'small' | 'large'
}