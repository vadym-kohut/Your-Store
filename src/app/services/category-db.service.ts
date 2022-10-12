import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryDBService {

  constructor(
    private http: HttpClient
  ) { }

  // GET
  getCategories$(): Observable<string[]> {
    return this.http.get<string[]>('https://dummyjson.com/products/categories');
  }
}
