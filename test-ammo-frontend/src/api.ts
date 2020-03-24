export const BASE_URL = 'http://localhost:3001'

export interface Page<T> 
{ 
    items: T[]
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
}

export interface Product {
    sku: string;
    title: string;
    shortDescription: string;
    price: string;
    oldPrice?: string
    images: string[];
}


export const searchProducts = async (search: string, page: number, perPage: number) => {
    
    const searchParam = encodeURIComponent(search);
    const pageParam = encodeURIComponent(page);
    const perPageParam = encodeURIComponent(perPage);

    const response = await fetch(`${BASE_URL}/products?s=${searchParam}&page=${pageParam}&perPage=${perPageParam}`);

    if (response.status !== 200) 
        throw response.statusText;

    const result: Page<Product> = await response.json();
    return result;
}