import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FilterForm } from 'src/app/interfaces/filter-form';
import { Store } from '@ngrx/store';
import { State } from '../state/query.reducer';
import * as ProductQueryActions from '../../products/state/query.actions';

@Component({
    selector: 'ys-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
    filterForm = new FormGroup<FilterForm>({
        sortQuery: new FormControl('featured', { nonNullable: true }),
        priceFromQuery: new FormControl(null),
        priceToQuery: new FormControl(null),
        ratingQuery: new FormControl('', { nonNullable: true }),
    });

    constructor(
        private store: Store<State>
    ) { }

    ngOnInit(): void {
        this.filterForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe((value) => {
                this.store.dispatch(ProductQueryActions.setProductQuery(value));
            });
    }

    clearFilters() {
        this.filterForm.patchValue({
            priceFromQuery: null,
            priceToQuery: null,
            ratingQuery: '',
        });
    }
}
