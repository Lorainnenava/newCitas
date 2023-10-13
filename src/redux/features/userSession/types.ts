export interface UserSessionState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        email: string;
        password: string;
        token: string;
        role: string;
        _idUser: string;
    }
}
