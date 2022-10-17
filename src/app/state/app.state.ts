import { cartReducer, CartState } from "../cart/state/cart.reducer";
import { productReducer, ProductState } from "../products/state/product.reducer";

export interface State {
    cart: CartState;
    products: ProductState;
}

export const appReducer = {
    cart: cartReducer,
    products: productReducer
}
