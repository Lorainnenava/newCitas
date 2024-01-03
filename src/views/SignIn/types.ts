import {
    Control,
    FieldErrors,
    FieldValues,
    UseFormHandleSubmit,
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
    handleSubmitLogin: () => void;
};

export const loginInitialState = {
    email: '',
    password: '',
};
