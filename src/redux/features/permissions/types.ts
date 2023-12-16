export interface PermissionsState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        role: string;
        module: string;
        subModule: string;
    };
}
