import React, {useEffect, useState} from 'react';
import Image from "next/image";
import style from './Header.module.css'
import Link from "next/link";
import Search from "../Search/Search";
import {useRouter} from "next/router";

const Header = () => {
    const [scrollAtTop, setScrollAtTop] = useState(true)
    const router = useRouter()

    const onScroll = () => {
        if (window.scrollY <= 15) setScrollAtTop(true)
        else setScrollAtTop(false)
    }

    useEffect(() => {
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onSearchClose = () => {
        delete router.query.search

        router.push({
            pathname: router.pathname,
            query: router.query
        }, null, { shallow: true }).then()
    }

    return (
        <>
            <header className={`${style.header} ${!scrollAtTop ? style.scroll : ''}`}>
                <div className={`container ${style.wrapper}`}>
                    <Link href='/'>
                        <Image src='/favicon.svg' alt='CrackStatus' width={50} height={50} />
                    </Link>
                    <Link
                        href={{
                            pathname: router.pathname,
                            query: {...router.query, search: 'open'}
                        }}
                        as='/search'
                        shallow
                    >
                        <Image src='/images/search.svg' className={style.search} alt='Search' width={24} height={24} />
                    </Link>
                </div>
            </header>

            <Search open={!!router.query.search} onClose={onSearchClose} />
        </>
    );
}

export default Header