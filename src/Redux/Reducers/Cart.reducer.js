import { handleActions } from "redux-actions";
// import { combineReducers } from "redux";
import * as actions from "../../Actions/cart.action";

const initialState = {
  cartItems: [],
};

const setCartReducer = handleActions(
  {
    [actions.setCartItemAction](state, { payload }) {
      const index = state.findIndex(item => +item.id === +payload.id);
      const newState = [...state];
      if (index !== -1) {
        if (payload.count > 0) {
          newState[index] = { ...state[index], ...payload };
          return newState;
        }
        newState.splice(index, 1);
        return newState;
      }
      return [...state, payload];
    },
  },
  initialState.cartItems,
);

export default setCartReducer;
