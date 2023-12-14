import { TypeAlertT } from '@/common/alert/types';
import {
    FieldErrors,
    FieldValues,
    UseFormHandleSubmit,
    Control,
} from 'react-hook-form';
import { AnySchema } from 'yup';

export type TLogin = {
    errors?: FieldErrors<{
        email: string;
        password: string;
    }>;
    control: Control<any>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    schema: AnySchema;
    loading: boolean;
    showAlert: TypeAlertT;
    setShowAlert: React.Dispatch<React.SetStateAction<TypeAlertT>>;
    handleSubmitLogin: () => void;
};

export const loginInitialState = {
    email: '',
    password: '',
};
