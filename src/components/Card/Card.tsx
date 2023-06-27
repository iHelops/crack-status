import React, {FC} from 'react';
import {ICardProps} from "./ICardProps";
import style from './Card.module.css'

const Card: FC<ICardProps> = ({children, size, ...props}) => {
    const isLarge = size === 'large'

    return (
        <div {...props} className={`${style.card} ${isLarge && style.large} ${props.className}`}>
            {children}
        </div>
    );
};

Card.defaultProps = {
    size: 'small'
}

export default Card;