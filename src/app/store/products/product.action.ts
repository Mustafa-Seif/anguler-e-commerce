import { createAction, props } from '@ngrx/store';

export const addProductList = createAction(
  '[wishlist page] add to wishlist',
  props<{ products: any }>()
);
export const removeProductList = createAction(
  '[wishlist page] reomve from wishlist',
  props<{ products: any }>()
);
