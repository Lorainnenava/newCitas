import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { TCustomerInput } from './types';
import { useController, Message } from 'react-hook-form';

const CustomerInput: FC<TCustomerInput> = ({
    name,
    label,
    errors,
    schema,
    control,
}) => {
    const {
        field: { onChange, value, ref, onBlur },
    } = useController({
        name,
        control,
        rules: {
            validate: (val) => {
                return schema
                    .validate(val)
                    .catch(({ message }: { message: string }) => message);
            },
        },
    });

    return (
        <TextField
            id="outlined-basic"
            size="small"
            name={name}
            value={value ?? ''}
            label={label}
            inputRef={ref}
            onBlur={onBlur}
            onChange={onChange}
            error={!!errors}
            helperText={errors ? (errors?.message as Message) : null}
        />
    );
};

export default CustomerInput;
