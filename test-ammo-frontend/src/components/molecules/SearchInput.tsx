import React, { useRef } from "react";
import { MdSearch, MdCancel } from "react-icons/md";

import { useId } from '../../hooks';
import styled from "styled-components";
import { gray2 } from "../../colors";

export interface SearchInputProps {
    value: string,
    onChange: (term: string) => void,
    className?: string
}

export const StyledSearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${gray2};
    border-radius: 15px;
    height: 30px;
    overflow: hidden;

    width: 470px;
`

export const StyledLabel = styled.label`
    margin: 0 20px;
    padding: 0;
    position: relative;
    top: 2px;
`

export const StyledInput = styled.input`
    border: none;
    height: 100%;
    outline: none;
    flex-grow: 1;
`

export const StyledClearButton = styled(MdCancel)`
    margin-right: 20px;
    cursor: pointer;
`


const SearchInput = ({value, onChange, className}: SearchInputProps) => {
    const id = useId();

    const showClean = value !== "";

    const ref = useRef<HTMLInputElement>(null);

    return <StyledSearchInput className={className}>
        <StyledLabel htmlFor={id}><MdSearch /></StyledLabel>
        <StyledInput ref={ref} id={id} onChange={e => onChange(e.target.value)} value={value} placeholder="Buscar produtos" />
        {showClean ? <StyledClearButton  onClick={() => { ref.current?.focus(); onChange("")}}/> : null}
    </StyledSearchInput>
}

export default SearchInput;