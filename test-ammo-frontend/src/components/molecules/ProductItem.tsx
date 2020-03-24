import React from "react";

import styled from "styled-components";
import { black, gray5 } from "../../colors";

export interface Product {
    sku: string,
    images: string[],
    title: string,
    shortDescription: string,
    price: string,
    oldPrice?: string
}

export interface ProductItemProps {
    item: Product,
    className?: string,
}

const MAX_VISIBLE_IMAGES = 4;

export const StyledProductItem = styled.div`
    display: flex;
    align-items: center;

    padding: 0 15px;
`

export const StyledImageBox = styled.div`
    display: flex;

    img {
        margin: 5.5px;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
`

export const StyledTitle = styled.p`
    color: ${black};
    font-size: 12pt;
    margin: 4pt auto;
`

export const StyledSubtitle = styled.p`
    color: ${gray5};
    font-size: 9.4pt;
    margin: 2pt auto;
`

export const StyledDescription = styled.div`
    margin: 5.5px;
    padding: 0 15px;
    flex-grow: 1;
`

export const StyledPrice = styled.div`
    margin: 5.5px;

    text-align: right;
`

export const Promotion = styled.span`
    font-size: 11pt;
    color: ${gray5};
`

export const Dash = styled.span`
    font-size: 12pt;
    text-decoration: line-through;
`


const ProductItem = ({ item, className }: ProductItemProps) => {

    const visibleImages = item.images.slice(0, MAX_VISIBLE_IMAGES);

    const isPromotion = item.oldPrice;

    return <StyledProductItem className={className}>
        <StyledImageBox>
            {visibleImages.map((image, index) => <img key={index} alt="" src={image} />)}
        </StyledImageBox>

        <StyledDescription>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledSubtitle>{item.shortDescription}</StyledSubtitle>
        </StyledDescription>

        <StyledPrice>
            {isPromotion ? <Promotion><Dash>R${item.oldPrice}</Dash> por </Promotion> : null}R${item.price}
        </StyledPrice>
    </StyledProductItem>
}

export default ProductItem;