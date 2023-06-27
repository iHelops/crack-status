import React from "react";

export interface ISearchBarProps {
    onSearch?: (query: string) => void,
    innerRef?: React.RefObject<HTMLInputElement>
}