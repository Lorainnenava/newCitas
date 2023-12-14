import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './features/login/slice';
import signUpReducer from './features/signUp/slice';

/**
 * Reducers
 */
export const RootReducer = combineReducers({
    userLogin: loginReducer,
    userSignUp: signUpReducer,
});
