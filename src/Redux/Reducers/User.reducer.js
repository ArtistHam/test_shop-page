/* eslint-disable no-unused-vars */
import { handleActions } from "redux-actions";
// import { combineReducers } from "redux";


const initialState = {
  userData: null,
};

const setUserDataReducer = handleActions(
  {},
  initialState.userData,
);

export default setUserDataReducer;
