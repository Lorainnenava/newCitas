export interface UserLoguedState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: { _id: string };
}
