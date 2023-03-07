import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductQuery } from '../interfaces/product-query';

@Injectable({
    providedIn: 'root',
})
export class QueryDBService {
    private productQuery$ = new BehaviorSubject<ProductQuery>({
        searchQuery: '',
        categoryQuery: '',
        sortQuery: 'featured',
        priceFromQuery: null,
        priceToQuery: null,
        ratingQuery: '',
    });

    constructor() {}

    // SET
    setProductQuery(query: Partial<ProductQuery>): void {
        this.productQuery$.next({ ...this.productQuery$.getValue(), ...query });
    }

    // GET
    getProductQuery$(): Observable<ProductQuery> {
        return this.productQuery$.asObservable();
    }

    clearProductQuery(): void {
        this.productQuery$.next({
            searchQuery: '',
            categoryQuery: '',
            sortQuery: '',
            priceFromQuery: null,
            priceToQuery: null,
            ratingQuery: '',
        });
    }
}
