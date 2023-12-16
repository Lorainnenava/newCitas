export interface TypeDocumentState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        typeOfDocument: string;
    };
}
