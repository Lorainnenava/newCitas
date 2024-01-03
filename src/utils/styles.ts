import styled from 'styled-components';
import { TextField } from '@mui/material';

export const BoxText = styled.div`
    width: 100%;
    height: 35px;
    color: white;
    background-color: #6f95ff;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const text = {
    fontSize: '28px',
    fontFamily: 'Roboto',
    marginBottom: '20px',
    color: '#6f95ff',
};

export const Containers = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const CssTextField = styled(TextField)<{
    colors?: string;
    border?: string;
}>`
    width: 100%;
    & label.Mui-focused {
        color: ${({ colors }) => colors || ''};
    }
    & .Input-focused {
        color: ${({ colors }) => colors || ''};
        border-color: ${({ border }) => border || 'first'};
    }
    & label {
        color: ${({ colors }) => colors || ''};
        border-color: ${({ border }) => border || 'first'};
    }
    & input {
    }
    & .MuiInput-underline:after {
        border-color: ${({ border }) => border || 'first'};
        color: ${({ colors }) => colors || 'first'};
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: ${({ border }) => border || 'first'};
            color: ${({ colors }) => colors || ''};
        }
        &:hover fieldset {
            border-color: ${({ border }) => border || 'first'};
            color: ${({ colors }) => colors || ''};
        }
        &.Mui-focused fieldset {
            border-color: ${({ border }) => border || 'first'};
            color: ${({ colors }) => colors || ''};
        }
        color: ${({ colors }) => colors || ''};
    }
`;

