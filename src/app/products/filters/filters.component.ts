import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { FilterForm } from 'src/app/interfaces/filter-form';
import { QueryDBService } from 'src/app/services/query-db.service';

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

    constructor(private queryDB: QueryDBService) { }

    ngOnInit(): void {
        this.filterForm.valueChanges
            .pipe(debounceTime(500))
            .subscribe((value) => {
                this.queryDB.setProductQuery(value);
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
