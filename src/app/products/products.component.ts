import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartDBService } from '../services/cart-db.service';
import { ProductDBService } from '../services/product-db.service';
import { QueryDBService } from '../services/query-db.service';
import { ToastDBService } from '../services/toast-db.service';
import { WatchlistDBService } from '../services/watchlist-db.service';

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
    private toastDB: ToastDBService
  ) { }

  ngOnInit(): void {
    this.products = this.productDB.getProductsBySearch$();
    this.queryDB.getProductQuery$().subscribe(product => this.category = product.categoryQuery);
  }

  addToWatchlist(product: Product): void {
    this.watchlistDB.addToWatchlist(product);
  }

  addToCart(product: Product): void {
    this.cartDB.addToCart(product);
  }

  setAddedProduct(product: Product) {
    this.toastDB.setAddedProduct(product);
  }

  clearProductCategoryQuery() {
    this.queryDB.setProductQuery({ categoryQuery: '' });
  }
}
