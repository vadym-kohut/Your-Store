import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<{ product: Product }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove From Cart',
    props<{ product: Product }>()
);
