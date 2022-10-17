import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { ProductDBService } from "src/app/services/product-db.service";
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productDB: ProductDBService) { }

    loadProducts$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(ProductActions.loadProducts),
                mergeMap(() => this.productDB.getProductsBySearch$()
                    .pipe(
                        map(products => ProductActions.loadProductsSuccess({ products }))
                    )
                )
            )
    });
}