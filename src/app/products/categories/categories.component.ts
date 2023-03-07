import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDBService } from 'src/app/services/category-db.service';
import { QueryDBService } from 'src/app/services/query-db.service';

@Component({
    selector: 'ys-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
    categories = new Observable<string[]>();

    constructor(
        private categoryDB: CategoryDBService,
        private queryDB: QueryDBService
    ) { }

    ngOnInit(): void {
        this.categories = this.categoryDB.getCategories$();
    }

    setProductCategoryQuery(query: string) {
        this.queryDB.setProductQuery({ categoryQuery: query });
    }
}
