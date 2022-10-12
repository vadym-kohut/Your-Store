import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, tap } from 'rxjs';
import { QueryDBService } from 'src/app/services/query-db.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    categories!: string[];
    productSearch = new FormControl('', { nonNullable: true });

    constructor(
        private queryDB: QueryDBService
    ) { }

    ngOnInit(): void {
        this.productSearch.valueChanges.pipe(debounceTime(500), tap(x => console.log(x)))
            .subscribe(value => this.queryDB.setProductQuery({ searchQuery: value }));
    }
}
