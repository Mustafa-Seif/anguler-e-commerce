import { addProductList, removeProductList } from './product.action';
import { createReducer, on } from '@ngrx/store';

const initialState = {
  items: [],
};

export const productsReducer = createReducer(
  initialState,
  on(addProductList, (state, action): any => {
    return {
      ...state,
      items: action.products,
    };
  }),
  on(removeProductList, (state, action): any => ({
    ...state,
    items: action.products,
  }))
);
