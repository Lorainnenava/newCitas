import { FormEvent, ChangeEvent } from 'react';
import { TypeAlertT } from '@/common/alert/types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

export type TLogin = {
    router: AppRouterInstance;
    loading: boolean;
    dataForm: typeof loginInitialState;
    required: boolean;
    showAlert: TypeAlertT;
    setShowAlert: React.Dispatch<React.SetStateAction<TypeAlertT>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
    handleChangue: (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => void;
};

export const loginInitialState = {
    email: '',
    password: '',
};
