import * as AppState from "../../state/app.state";
import * as ProductActions from "./product.actions";

export interface State extends AppState.State {
    product: ProductState
}

export interface ProductState {

}
