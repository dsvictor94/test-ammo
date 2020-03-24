import React from "react";

import styled from "styled-components";
import { primary } from "../../colors";

import { ReactComponent as Logo } from '../../logo.svg';
import SearchInput from "../molecules/SearchInput";

export interface HeaderProps {
    title: string,
    searchTerm: string,
    onSearchTermChange: (term: string) => void,
    className?: string
}


export const StyledHeader = styled.div`
    
`

export const StyledSearchHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 62px;
    padding: 0 30px;
    border-bottom: 1px solid #D3D2D5;
`

export const StyledLogo = styled(Logo)`
    width: 144px;
    fill: rgb(128, 108, 92);
`

export const StyledTitle = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: column;
    vertical-align: middle;
    
    font-weight: normal;
    height: 100px;
    margin: 0;
    padding: 0 30px;
    background-color: #EEEDF1;
    border-bottom: 1px solid #DBDBE2;

    color: ${primary};
`

const Header = ({ title, searchTerm, onSearchTermChange, className }: HeaderProps) => {

    return <StyledHeader className={className}>
        <StyledSearchHeader>
            <StyledLogo />
            <SearchInput value={searchTerm} onChange={onSearchTermChange} />
        </StyledSearchHeader>
        <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
}

export default Header;