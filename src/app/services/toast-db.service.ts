import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
    providedIn: 'root',
})
export class ToastDBService {
    private addedProduct$ = new Subject<Product | null>();

    constructor() {}

    setAddedProduct(product: Product): void {
        this.addedProduct$.next(product);
    }

    getAddedProduct$(): Observable<Product | null> {
        return this.addedProduct$.asObservable();
    }

    hideToast(): void {
        this.addedProduct$.next(null);
    }
}
