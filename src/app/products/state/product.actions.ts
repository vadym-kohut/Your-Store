import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product';

export const loadProducts = createAction('[Products] Load');

export const loadProductsSuccess = createAction(
    '[Products] Load Success',
    props<{ products: Product[] }>()
);

export const loadCategories = createAction('[Products] Categories Load');

export const loadCategoriesSuccess = createAction(
    '[Products] Load Categories Success',
    props<{ categories: string[] }>()
);

export const loadProductById = createAction(
    '[Products] Get Product By Id',
    props<{ product: Product }>()
);
