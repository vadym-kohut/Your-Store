import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartDBService } from '../services/cart-db.service';
import { ProductDBService } from '../services/product-db.service';
import { WatchlistDBService } from '../services/watchlist-db.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  chosenProduct!: Product;
  chosenProductId!: number;
  chosenProductImages!: any[];

  constructor(
    private productDB: ProductDBService,
    private route: ActivatedRoute,
    private watchlistDB: WatchlistDBService,
    private cartDB: CartDBService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getProductById(params['id'])))
      .subscribe((product) => {
        this.chosenProduct = product;
        this.chosenProductImages = this.chosenProduct.images.map((img, i) => ({
          "previewImageSrc": img,
          "thumbnailImageSrc": img,
          "alt": `Image ${i}`,
          "title": `Image ${i}`
        }))
      });
  }

  getProductById(id: number) {
    return this.productDB.getProductById$(id);
  }

  addToWatchlist(chosenProduct: Product) {
    this.watchlistDB.addToWatchlist(chosenProduct);
  }

  addToCart(chosenProduct: Product) {
    this.cartDB.addToCart(chosenProduct);
  }
}
