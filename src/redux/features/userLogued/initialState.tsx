import { UserLoguedState } from './types';

/**
 * State initial userLogued
 */
export const initialStateUserLogued: UserLoguedState = {
    loading: false,
    error: undefined,
    success: false,
    data: { _id: '' },
};
