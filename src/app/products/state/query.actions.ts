import { createAction, props } from '@ngrx/store';
import { ProductQuery } from '../../interfaces/product-query';

export const setProductQuery = createAction(
    '[Query] Set Product Query',
    props<Partial<ProductQuery>>()
);

export const getProductQuery = createAction(
    '[Query] Get Product Query'
);
