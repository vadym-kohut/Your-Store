import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export const addToCart = createAction(
    '[Product] Add To Cart',
    props<{ product: Product }>()
);