import React, {FC} from 'react';
import {ILayoutProps} from "./ILayoutProps";
import Header from "../Header/Header";
import style from './Layout.module.css'
import Footer from "../Footer/Footer";

const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <div className={style.layout}>
            <Header/>
            <main className={`container ${style.content}`}>
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout