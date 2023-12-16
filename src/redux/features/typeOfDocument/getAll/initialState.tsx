import { TypeDocumentState } from './types';

export const initialStateTypeOfDocument: TypeDocumentState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        typeOfDocument: '',
    },
};
