import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getCategories } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';
import * as ProductQueryActions from '../state/productQuery.actions';
import { State } from '../../state/app.state';

@Component({
    selector: 'ys-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories = new Observable<string[]>();

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.categories = this.store.select(getCategories);
        this.store.dispatch(ProductActions.loadCategories());
    }

    setProductCategoryQuery(query: string) {
        this.store.dispatch(ProductQueryActions.setProductQuery({ categoryQuery: query }));
    }
}
