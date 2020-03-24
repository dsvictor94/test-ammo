import React from "react";

import ProductItem, { Product } from "../molecules/ProductItem";
import styled from "styled-components";
import { gray1 } from "../../colors";

interface ProductListProps {
    items: Product[],
    className?: string,
}

export const StyledProductList = styled.ul`
    list-style: none;
    padding: 0;

    border: 1px solid ${gray1};

    & > li:not(:last-child) {
        border-bottom: 1px solid ${gray1};
    }
`

const ProductList = ({ items, className }: ProductListProps) => {

    return <StyledProductList className={className}>
        {items.map((item) => <li key={item.sku}><ProductItem item={item} /></li>)}
    </StyledProductList>
}

export default ProductList;