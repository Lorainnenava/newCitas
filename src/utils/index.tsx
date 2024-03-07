import { ArgVal } from '@/utils/types/types';

/**
 * Validación numerica
 * */
export const isNumericValidation = (value: ArgVal): boolean =>
    !!(
        value !== null &&
        /^[0-9]+$/g.test(value as string) === false &&
        value !== '' &&
        value !== undefined &&
        value !== null
    );

/**
 * Validar campos requeridos
 */
export const validateRequired = (field?: boolean, required?: boolean) => {
    let color: string = '';
    if (field && required) {
        color = '#d32f2f';
    } else {
        color = '';
    }
    return color;
};

/**
 * Validar selects requeridos
 */
export const validateRequiredSelect = (field?: boolean, required?: boolean) => {
    let color: boolean = false;
    if (field && required) {
        color = true;
    } else {
        color = false;
    }
    return color;
};

export const alertInitialState = {
    message: '',
    type: 'success' as 'success',
    active: false,
};

export const validateEmail = (value: string): boolean | undefined => {
    const expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (value) {
        if (expression.test(value)) {
            return true;
        }
        return false;
    }
};
