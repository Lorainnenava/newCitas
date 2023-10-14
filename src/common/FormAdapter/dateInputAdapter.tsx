import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(() => ({
    '& .MuiInputLabel-root': {
        fontSize: '1em',
    },

    '& .MuiInputBase-root': {
        height: '38px',
    },
}));

export const DateInputAdapter = (
    props: TextFieldProps & {
        name: string;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
        borderColor?: boolean;
    }
) => {
    const { name, onChange, borderColor, ref, ...rest } = props;

    return (
        <CustomTextField
            {...rest}
            name={name}
            type="date"
            inputRef={ref}
            value={rest.value}
            onChange={onChange}
            onBlur={rest.onBlur}
            size="small"
            error={borderColor}
            InputLabelProps={{ shrink: true }}
            sx={{
                width: '100%',
                "& input[type='date']": {
                    color: borderColor ? '#d32f2f' : 'rgba(87, 84, 84, 0.87)', // Cambia el color del icono del selector de fecha
                },
                '& .MuiInputBase-input': {
                    fontSize: '1em',
                    color: borderColor ? '#d32f2f' : '',
                },
            }}
        />
    );
};
