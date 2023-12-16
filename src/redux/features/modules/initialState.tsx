import { ModulesState } from './types';

export const initialStateModules: ModulesState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        name: '',
        subModule: [
            {
                name: '',
                path: '',
            },
        ],
    },
};
