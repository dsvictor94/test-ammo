import React from "react";

import styled from "styled-components";
import { gray0 } from "../../colors";
import Select from "../atoms/Select";
import PageSelect from "../atoms/PageSelector";

export interface PaginationFooterProps {
    totalPages: number,
    currentPage: number,
    itemsPerPage: number,
    onPageChange: (page: number) => void,
    onPerPageChange: (perPage: number) => void,
    className?: string,
}


export const StyledPaginationFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
    padding-top: 14px;
    border-top: 2px solid ${gray0};
`

const PER_PAGE_OPTIONS = [8, 16, 32, 64].map(value => ({ value: value, label: `${value} produtos por página` }))

const PaginationFooter = ({ totalPages, currentPage, itemsPerPage, onPageChange, onPerPageChange, className }: PaginationFooterProps) => {

    return <StyledPaginationFooter className={className}>
        <Select options={PER_PAGE_OPTIONS} value={itemsPerPage} onChange={(e) => onPerPageChange(Number(e.target.value))} />
        <PageSelect totalPages={totalPages} current={currentPage} onChange={onPageChange} />
    </StyledPaginationFooter>
}

export default PaginationFooter;