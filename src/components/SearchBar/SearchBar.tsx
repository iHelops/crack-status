import React, {FC, useEffect, useState} from 'react';
import {ISearchBarProps} from "./ISearchBarProps";
import style from './SearchBar.module.css'
import Image from "next/image";

const SearchBar: FC<ISearchBarProps> = ({onSearch, innerRef}) => {
    const [query, setQuery] = useState<string>('')

    useEffect(() => {
        if (onSearch) onSearch(query)
    }, [query])

    const onChangeQuery = (e) => setQuery(e.target.value)


    return (
        <div className={style.searchWrapper}>
            <Image src='/images/search.svg' alt='' width={28} height={28} className={style.icon}/>
            <input
                value={query}
                onChange={onChangeQuery}
                className={style.search}
                placeholder='Введите название игры'
                ref={innerRef}
            />
        </div>
    );
}

export default SearchBar