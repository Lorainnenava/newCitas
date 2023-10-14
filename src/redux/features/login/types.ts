export interface UserLoginState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        msg: string;
        token: string;
        user: {
            email: string;
            identification: string;
            mobileNumber: string;
            name: string;
            password: string;
            role: string;
        };
    };
}
