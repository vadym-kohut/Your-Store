import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QueryDBService } from 'src/app/services/query-db.service';
import { Store } from '@ngrx/store';
import { getCategories, State } from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';

@Component({
    selector: 'ys-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories = new Observable<string[]>();

    constructor(
        private queryDB: QueryDBService,
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.categories = this.store.select(getCategories);
        this.store.dispatch(ProductActions.loadCategories());
    }

    setProductCategoryQuery(query: string) {
        this.queryDB.setProductQuery({ categoryQuery: query });
    }
}
