import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                Спасибо за предоставленную информацию: gamestatus.info
            </div>
        </footer>
    );
}

export default Footer