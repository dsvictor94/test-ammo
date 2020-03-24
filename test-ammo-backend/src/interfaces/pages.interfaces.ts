export interface Page<T> 
{ 
    items: T[]
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
}