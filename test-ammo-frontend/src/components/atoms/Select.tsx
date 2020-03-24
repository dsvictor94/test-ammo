import React from 'react';
import styled from 'styled-components';
import { white, gray5, gray2 } from '../../colors';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string | number, label: string }[]
}

export const StyledSelect = styled.select`
    height: 40px;
    background-color: ${white};
    border-radius: 4px;
    border: 1px solid ${gray2};
    padding: 10px;

    font-size: 11pt;
    color: ${gray5};
`

const Select = ({ options, ...props }: SelectProps) => {
    return <StyledSelect {...props}>
        {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
    </StyledSelect>
}

export default Select;