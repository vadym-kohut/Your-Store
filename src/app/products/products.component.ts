import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { getProducts } from './state/product.reducer';
import { State } from '../state/app.state';
import * as ProductActions from './state/product.actions';
import * as CartActions from '../cart/state/cart.actions';
import * as WatchlistActions from '../watchlist/state/watchlist.actions';
import * as ProductQueryActions from './state/productQuery.actions';
// import { getProductCategoryQuery } from './state/productQuery.reducer';

@Component({
    selector: 'ys-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products$ = new Observable<Product[]>();
    category$ = new Observable<string | null>();

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.products$ = this.store.select(getProducts);
        this.store.dispatch(ProductActions.loadProducts());
        // this.category$ = this.store.select(getProductCategoryQuery);
    }

    addToWatchlist(product: Product): void {
        this.store.dispatch(WatchlistActions.addToWatchlist({ product }));
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }

    clearProductCategoryQuery() {
        this.store.dispatch(ProductQueryActions.setProductQuery({ categoryQuery: '' }));
    }
}
