import React from 'react';
import styled, { css } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { gray5, gray2, gray1 } from '../../colors';

export interface PageSelectProps {
    totalPages: number,
    current: number,
    className?: string,
    onChange: (page: number) => void
}

export interface DisableProp {
    disable: boolean
}

export interface SelectedProp {
    selected: boolean
}

const MAX_VISIBLE_PAGES = 6;

function calculateVisiblePages(totalPages: number, current: number) {
    const pages = [];

    let firstPage = Math.max(current - Math.floor(MAX_VISIBLE_PAGES / 2) + 1, 1);
    const lastPage = Math.min(firstPage + MAX_VISIBLE_PAGES, totalPages);
    firstPage = Math.max(lastPage - MAX_VISIBLE_PAGES, 1);

    for (let i = firstPage; i <= lastPage; i++) {
        pages.push(i)
    }

    return pages;
}

export const StyledPageSelect = styled.ul`
    list-style: none;
    display: inline-flex;

    color: ${gray5};
`

export const StyledButton = styled.li`
    width: 28px;
    height: 38px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    vertical-align: middle;

    border: 1px solid transparent;
    cursor: pointer;
`

export const StyledNavigationButton = styled(StyledButton)`
    font-size: 14pt;

    ${(p: DisableProp) => p.disable && css`
        color: ${gray1};
        cursor: default;
    `}
`

export const StyledPageButton = styled(StyledButton)`
    ${(p: SelectedProp) => p.selected && css`
        width: 50px;
        margin: 0 10px;
        border: 1px solid ${gray2};
    `}
`

const PageSelect = ({ totalPages, current, onChange, className }: PageSelectProps) => {
    const pages = calculateVisiblePages(totalPages, current);
    return <StyledPageSelect className={className}>
        <StyledNavigationButton 
            disable={current === 1} 
            onClick={() => current !== 1 && onChange(current - 1)}
        >
            <IoIosArrowBack />
        </StyledNavigationButton>
        {pages.map(page => 
            <StyledPageButton
                key={page}
                selected={page === current} 
                onClick={(() => onChange(page))}
            >
                {page}
            </StyledPageButton>
        )}
        <StyledNavigationButton 
            disable={current === totalPages}
            onClick={() => current !== totalPages && onChange(current + 1)}
        >
            <IoIosArrowForward />
        </StyledNavigationButton>
    </StyledPageSelect>
}

export default PageSelect;