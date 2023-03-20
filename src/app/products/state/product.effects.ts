import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, map, mergeMap, Observable } from 'rxjs';
import * as ProductActions from './product.actions';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { QueryDBService } from '../../services/query-db.service';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private queryDB: QueryDBService
    ) {
    }

    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadProducts),
            mergeMap(() =>
                this.getProductsBySearch$()
                    .pipe(
                        map((products) =>
                            ProductActions.loadProductsSuccess({ products })
                        )
                    )
            )
        );
    });

    loadCategoties$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductActions.loadCategories),
            mergeMap(() =>
                this.getCategories$()
                    .pipe(
                        map((categories) =>
                            ProductActions.loadCategoriesSuccess({ categories }))
                    ))
        );
    });

    getAllProducts$(): Observable<Product[]> {
        return this.http
            .get<{ products: Product[] }>('https://dummyjson.com/products', {
                params: { limit: 100 }
            })
            .pipe(map((data) => data.products));
    }

    getProductsBySearch$() {
        return combineLatest([
            this.getAllProducts$(),
            this.queryDB.getProductQuery$()
        ]).pipe(
            map(([products, query]) => {
                let filteredProducts: Product[] = products;

                if (query.searchQuery !== '') {
                    filteredProducts = filteredProducts.filter(
                        (product: Product) =>
                            product.title
                                .toLowerCase()
                                .startsWith(query.searchQuery!.toLowerCase())
                    );
                }

                if (query.categoryQuery !== '') {
                    filteredProducts = filteredProducts.filter(
                        (product: Product) =>
                            product.category === query.categoryQuery
                    );
                }

                if (query.sortQuery !== '') {
                    switch (query.sortQuery) {
                        case 'priceLH':
                            filteredProducts = [...filteredProducts].sort(
                                (a, b) => (a.price > b.price ? 1 : -1)
                            );
                            break;
                        case 'priceHL':
                            filteredProducts = [...filteredProducts].sort(
                                (a, b) => (a.price < b.price ? 1 : -1)
                            );
                            break;
                        case 'alphabetically':
                            filteredProducts = [...filteredProducts].sort(
                                (a, b) => (a.title > b.title ? 1 : -1)
                            );
                            break;
                        case 'hRating':
                            filteredProducts = [...filteredProducts].sort(
                                (a, b) => (a.rating < b.rating ? 1 : -1)
                            );
                            break;
                    }
                }

                if (query.priceFromQuery !== null) {
                    filteredProducts = filteredProducts.filter(
                        (product: Product) =>
                            product.price >= query.priceFromQuery!
                    );
                }

                if (query.priceToQuery !== null) {
                    filteredProducts = filteredProducts.filter(
                        (product: Product) =>
                            product.price <= query.priceToQuery!
                    );
                }

                if (query.ratingQuery !== '') {
                    switch (query.ratingQuery) {
                        case '1':
                            filteredProducts = filteredProducts
                                .filter(
                                    (product: Product) => product.rating >= 4.0
                                )
                                .filter(
                                    (product: Product) => product.rating <= 4.2
                                );
                            break;
                        case '2':
                            filteredProducts = filteredProducts
                                .filter(
                                    (product: Product) => product.rating > 4.2
                                )
                                .filter(
                                    (product: Product) => product.rating <= 4.4
                                );
                            break;
                        case '3':
                            filteredProducts = filteredProducts
                                .filter(
                                    (product: Product) => product.rating > 4.4
                                )
                                .filter(
                                    (product: Product) => product.rating <= 4.6
                                );
                            break;
                        case '4':
                            filteredProducts = filteredProducts
                                .filter(
                                    (product: Product) => product.rating > 4.6
                                )
                                .filter(
                                    (product: Product) => product.rating <= 4.8
                                );
                            break;
                        case '5':
                            filteredProducts = filteredProducts
                                .filter(
                                    (product: Product) => product.rating > 4.8
                                )
                                .filter(
                                    (product: Product) => product.rating <= 5.0
                                );
                            break;
                    }
                }
                return filteredProducts;
            })
        );
    }

    getCategories$(): Observable<string[]> {
        return this.http.get<string[]>(
            'https://dummyjson.com/products/categories'
        );
    }
}
