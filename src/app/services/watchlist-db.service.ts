import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WatchlistDBService {
  private watchlistProducts$ = new BehaviorSubject<Product[]>([]);

  constructor() { }

  getWatchlist$(): Observable<Product[]> {
    return this.watchlistProducts$.asObservable();
  }

  addToWatchlist(product: Product): void {
    if (!this.watchlistProducts$.getValue().includes(product)) {
      this.watchlistProducts$.next([...this.watchlistProducts$.getValue(), product]);
    }
  }

  removeFromWatchlist(product: Product): void {
    this.watchlistProducts$.next(
      this.watchlistProducts$.getValue().filter(p => p !== product)
    );
  }

  getWatchlistProductNumber$(): Observable<number> {
    return this.watchlistProducts$.pipe(
      map((products: Product[]) => products.length)
    );
  }
}
