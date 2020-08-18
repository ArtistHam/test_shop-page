import { handleActions } from "redux-actions";
import * as actions from "../../Actions/products.action";


const initialState = {
  productsList: [],
};

const setProductListReducer = handleActions(
  {
    [actions.getProductListSuccess](state, { payload }) {
      console.log(payload);
      return [...payload];
    },
  },
  initialState.productsList,
);

export default setProductListReducer;
