import { createAction } from "redux-actions";

export const setCartItemAction = createAction("SET_CART_ITEM");

export const setCartItem = data => (dispatch) => {
  dispatch(setCartItemAction(data));
};
