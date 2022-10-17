import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export const loadProducts = createAction(
    '[Products] Load'
);

export const loadProductsSuccess = createAction(
    '[Products] Load Success',
    props<{ products: Product[] }>()
);
