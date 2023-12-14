import { AnySchema } from 'yup';
import { Control, FieldValues, FieldError } from 'react-hook-form';

export type TCustomerInput = {
    label: string;
    name: string;
    control: Control<FieldValues>;
    errors?: FieldError;
    schema: AnySchema;
};
