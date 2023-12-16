export interface SpecialtyState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        name: string;
    };
}
