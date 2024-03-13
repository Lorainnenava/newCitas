import { Control, FieldErrors } from 'react-hook-form';
import { AnySchema } from 'yup';

export type TLogin = {
    errors?: FieldErrors<{
        email: string;
        password: string;
    }>;
    control: Control<any>;
    schema: AnySchema;
    loading: boolean;
    disabled: boolean;
    handleSubmit: (
        e?: React.BaseSyntheticEvent<object, any, any> | undefined
    ) => Promise<void>;
};

export const loginInitialState = {
    email: '',
    password: '',
};
