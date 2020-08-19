import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import * as actions from "../../Actions/products.action";


const initialState = {
  productsList: [],
  product: null,
};

const setProductListReducer = handleActions(
  {
    [actions.getProductListSuccess](state, { payload }) {
      return [...payload];
    },
  },
  initialState.productsList,
);

const setProductReducer = handleActions(
  {
    [actions.getProductSuccess](state, { payload }) {
      console.log(payload);
      return payload;
    },
  },
  initialState.productsList,
);

export default combineReducers({
  setProductListReducer,
  setProductReducer,
});
