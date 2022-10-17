import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartDBService } from '../services/cart-db.service';
import { ProductDBService } from '../services/product-db.service';
import { QueryDBService } from '../services/query-db.service';
import { ToastDBService } from '../services/toast-db.service';
import { WatchlistDBService } from '../services/watchlist-db.service';
import { getProducts, State } from './state/product.reducer';
import * as ProductActions from './state/product.actions';
import * as CartActions from '../cart/state/cart.actions';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products = new Observable<Product[]>();
    category!: string | null;

    constructor(
        private productDB: ProductDBService,
        private watchlistDB: WatchlistDBService,
        private cartDB: CartDBService,
        private queryDB: QueryDBService,
        private toastDB: ToastDBService,
        private store: Store<State>
    ) { }

    ngOnInit(): void {
        this.products = this.store.select(getProducts)
        this.store.dispatch(ProductActions.loadProducts())
        this.queryDB.getProductQuery$().subscribe(product => this.category = product.categoryQuery);
    }

    addToWatchlist(product: Product): void {
        this.watchlistDB.addToWatchlist(product);
    }

    addToCart(product: Product): void {
        this.store.dispatch(CartActions.addToCart({ product }));
    }

    setAddedProduct(product: Product) {
        this.toastDB.setAddedProduct(product);
    }

    clearProductCategoryQuery() {
        this.queryDB.setProductQuery({ categoryQuery: '' });
    }
}
