import React, { useState, useCallback } from "react"
import ProductList from "../components/organisms/ProductList"
import PaginationFooter from "../components/organisms/PaginationFooter"
import styled from "styled-components";
import Header from "../components/organisms/Header";
import { searchProducts } from "../api";
import { useFetch, useDocumentTitle } from "../hooks";
import { accent, gray5, primary } from "../colors";

const DEFAULT_PER_PAGE = 16;

const ContentWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;

const StyledError = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1080px;
    margin: 30px auto;
    font-size: 16pt;
    color: ${primary};
`

const StyledItemConter = styled.div`
    font-size: 10pt;
    color: ${gray5};
    display: inline-block;
    text-transform: uppercase;
    border-bottom: 3px solid ${accent};
    padding-bottom: 4px;
    margin: 34px 0px 10px 0;
`

const ProductSearchPage = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(1);
    
    const fetchProducts = useCallback(
        () => searchProducts(searchTerm, currentPage, perPage),
        [searchTerm, perPage, currentPage]
    )

    const { result, isLoading, isError } = useFetch(fetchProducts);

    const title = isLoading ? "Carregando ..." : (searchTerm === "" ? "Lista de produtos" : searchTerm);

    useDocumentTitle(title);

    return <div>
        <Header title={title} searchTerm={searchTerm} onSearchTermChange={term => setSearchTerm(term)} />
        {isError 
            ? <StyledError >
                Ops! Nenhum produto encontrado, tente outro termo.
            </StyledError>
            : (isLoading || result === undefined) ? null :
                <ContentWrapper>
                    <StyledItemConter>{result.totalItems} produtos encontrados</StyledItemConter>
                    <ProductList items={result.items} />
                    <PaginationFooter
                        totalPages={result.totalPages}
                        currentPage={result.page}
                        itemsPerPage={result.perPage}
                        onPageChange={(page) => setCurrentPage(page)}
                        onPerPageChange={(perPage) => setPerPage(perPage)}
                    />
                </ContentWrapper>
        }
    </div>
}

export default ProductSearchPage;