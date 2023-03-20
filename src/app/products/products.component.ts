import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { QueryDBService } from '../services/query-db.service';
import { getProducts, State } from './state/product.reducer';
import * as ProductActions from './state/product.actions';
import * as CartActions from '../cart/state/cart.actions';
import * as WatchlistActions from '../watchlist/state/watchlist.actions';

@Component({
    selector: 'ys-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    products = new Observable<Product[]>();
    category!: string | null;

    constructor(
        private queryDB: QueryDBService,
        private store: Store<State>
    ) { }

    ngOnInit(): void {
        this.products = this.store.select(getProducts);
        this.store.dispatch(ProductActions.loadProducts());
        this.queryDB
            .getProductQuery$()
            .subscribe((product) => (this.category = product.categoryQuery));
    }

    addToWatchlist(product: Product): void {
        this.store.dispatch(WatchlistActions.addToWatchlist({ product }));
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }

    clearProductCategoryQuery() {
        this.queryDB.setProductQuery({ categoryQuery: '' });
    }
}
