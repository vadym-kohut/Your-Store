import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../products/state/query.reducer';
import * as ProductQueryActions from '../../products/state/query.actions';

@Component({
    selector: 'ys-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    categories!: string[];
    productSearch = new FormControl('', { nonNullable: true });

    constructor(
        private store: Store<State>
    ) {
    }

    ngOnInit(): void {
        this.productSearch.valueChanges
            .pipe(debounceTime(500))
            .subscribe((value) =>
                this.store.dispatch(ProductQueryActions.setProductQuery({ searchQuery: value }))
            );
    }
}
