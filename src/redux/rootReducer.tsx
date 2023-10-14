import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './features/login/slice';
import signUpReducer from './features/signUp/slice';
import userLoguedReducer from './features/userLogued/slice';
import userSessionReducer from './features/userSession/slice';

/**
 * Reducers
 */
export const RootReducer = combineReducers({
    userLogin: loginReducer,
    userSignUp: signUpReducer,
    userLogued: userLoguedReducer,
    userSession: userSessionReducer,
});
