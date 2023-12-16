import { PermissionsState } from './types';

export const initialStatePermissions: PermissionsState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        role: '',
        module: '',
        subModule: '',
    },
};
