import { createAction } from "redux-actions";

import productList from "../Data/ProductList";

export const getProductListRequest = createAction("GET_PRODUCT_LIST_REQUEST");
export const getProductListSuccess = createAction("GET_PRODUCT_LIST_SUCCESS");
export const getProductListFailure = createAction("GET_PRODUCT_LIST_FAILURE");

export const getProductRequest = createAction("GET_PRODUCT_REQUEST");
export const getProductSuccess = createAction("GET_PRODUCT_SUCCESS");
export const getProductFailure = createAction("GET_PRODUCT_FAILURE");

export const getProductList = () => (dispatch) => {
  dispatch(getProductListRequest());
  try {
    const res = productList;
    dispatch(getProductListSuccess(res));
  } catch (e) {
    dispatch(getProductListFailure(e));
  }
};

export const getProduct = id => (dispatch) => {
  dispatch(getProductRequest());
  try {
    const res = productList.find(product => product.id === +id);
    dispatch(getProductSuccess(res));
  } catch (e) {
    dispatch(getProductFailure(e));
  }
};
