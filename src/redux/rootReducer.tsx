import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./features/login/slice";
import signUpReducer from "./features/signUp/slice";

/**
 * se llaman a todos los reducers
 */
export const RootReducer = combineReducers({
  userLogin: loginReducer,
  userSignUp: signUpReducer
});
