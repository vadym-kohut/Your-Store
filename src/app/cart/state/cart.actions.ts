import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/interfaces/product";

export const removeFromCart = createAction(
    '[Cart] Remove From Cart',
    props<{ product: Product }>()
);
