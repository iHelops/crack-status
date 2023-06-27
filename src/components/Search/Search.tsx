import React, {FC, useEffect, useRef, useState} from 'react';
import {ISearchProps} from "./ISearchProps";
import style from './Search.module.css'
import Portal from "../Portal/Portal";
import SearchBar from "../SearchBar/SearchBar";
import GameList from "../GameList/GameList";
import {ISearchGame} from "../../models/game";
import GamesApi from "../../api/games";
import Image from "next/image";

const Search: FC<ISearchProps> = ({open, onClose}) => {
    const [searchTimer, setSearchTimer] = useState<any>(null)
    const [games, setGames] = useState<ISearchGame[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const searchRef = useRef<HTMLInputElement>()

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
            searchRef.current?.focus()
        }

        return () => { document.body.style.overflow = 'unset' };
    }, [open])

    const onSearch = (query: string) => {
        if (searchTimer) clearTimeout(searchTimer)

        setSearchTimer(
            setTimeout(async () => {
                if (!query) {
                    setGames([])
                    return
                }

                setLoading(true)
                const data = await GamesApi.search(query)
                setLoading(false)
                setGames(data)
            }, 500)
        )
    }

    return (
        <Portal>
            <div className={`${style.searchWrapper} ${open && style.open}`} onClick={onClose}>
                <div className="container">
                    <div className={style.search} onClick={e => e.stopPropagation()}>
                        <SearchBar onSearch={onSearch} innerRef={searchRef}/>

                        {!loading && games.length !== 0 ? <>
                            <Image src='/images/chevron.svg' alt='' width={24} height={24}/>
                        </> : null}

                        {!loading ? <>
                            <GameList games={games}/>
                        </> : <>
                            <Image src='/images/spinner.svg' alt='Загрузка...' width={50} height={50} style={{opacity: .5}}/>
                        </>}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default Search