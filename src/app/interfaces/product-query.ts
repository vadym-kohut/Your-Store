export interface ProductQuery {
    searchQuery: string;
    categoryQuery: string;
    sortQuery: string;
    priceFromQuery: number | null;
    priceToQuery: number | null;
    ratingQuery: string;
}
