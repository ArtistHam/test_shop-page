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
    [actions.setSortAction](state, { payload }) {
      const newState = [...state];
      if (payload === "ASC") {
        newState.sort((a, b) => +a.price.replace(/\$/, "") - +b.price.replace(/\$/, ""));
      }
      if (payload === "DESC") {
        newState.sort((a, b) => +b.price.replace(/\$/, "") - +a.price.replace(/\$/, ""));
      }
      return newState;
    },
  },
  initialState.productsList,
);

const setProductReducer = handleActions(
  {
    [actions.getProductSuccess](state, { payload }) {
      return payload;
    },
  },
  initialState.productsList,
);

export default combineReducers({
  setProductListReducer,
  setProductReducer,
});
