import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
    providedIn: 'root',
})
export class CartDBService {
    private cartProducts$ = new BehaviorSubject<Product[]>([]);

    constructor() {}

    // GET
    getCartProducts$(): Observable<Product[]> {
        return this.cartProducts$.asObservable();
    }

    getCartProductsNumber$(): Observable<number> {
        return this.cartProducts$.pipe(
            map((products: Product[]) => products.length)
        );
    }

    getProductsPriceArray(products: Product[]): number[] {
        return products.map((product) => product.price);
    }

    getCartProductsTotalAmount$(): Observable<number> {
        return this.cartProducts$.pipe(
            map(this.getProductsPriceArray),
            map((priceArr) => priceArr.reduce((prev, next) => prev + next))
        );
    }

    addToCart(product: Product): void {
        if (!this.cartProducts$.getValue().includes(product)) {
            this.cartProducts$.next([
                ...this.cartProducts$.getValue(),
                product,
            ]);
        }
    }

    removeFromCart(product: Product): void {
        this.cartProducts$.next(
            this.cartProducts$.getValue().filter((p) => p !== product)
        );
    }
}
