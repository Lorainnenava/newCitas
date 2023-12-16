export interface RolesState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        name: string;
    };
}
