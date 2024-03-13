'use client';
import React from 'react';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '@/utils';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { handler } from '../../api/createCookie/route';
import { FormLogin } from './form';

const Login = () => {
    /**
     * useStates
     */
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    /**
     * schema de validación
     */
    const schema = yup.object().shape({
        email: yup
            .string()
            .required('El correo es requerido')
            .test('validar-email', 'El correo no es válido', (value) =>
                validateEmail(value)
            ),
        password: yup
            .string()
            .min(4, 'La contraseña debe tener minimo 4 caracteres')
            .max(10, 'La contraseña debe tener maximo 10 caracteres')
            .required('la contraseña es requerida'),
    });

    /**
     * useForm
     */
    const {
        handleSubmit: onSubmit,
        formState: { errors },
        control,
    } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

    /**
     * handleSubmitLogin
     */
    const handleSubmit = onSubmit(async (dataValue) => {
        setLoading(true);
        setDisabled(true);
        await signIn('credentials', {
            redirect: false,
            email: dataValue?.email,
            password: dataValue?.password,
        })
            .then(async (response) => {
                if (!response?.ok) {
                    setLoading(false);
                    setDisabled(false);
                    toast('Los datos son incorrectos.', {
                        autoClose: 2000,
                        type: 'error',
                        hideProgressBar: false,
                    });
                } else {
                    const session = await getSession();
                    const fetchPromise = await handler(session?.user.token);
                    if (fetchPromise === true) {
                        setLoading(false);
                        router.push('/Dashboard');
                        toast('Se inicio sesion correctamente.', {
                            autoClose: 2000,
                            type: 'success',
                            hideProgressBar: false,
                        });
                    }
                }
            })
            .catch(() => {
                setLoading(false);
                setDisabled(false);
            });
    });

    return (
        <FormLogin
            schema={schema}
            errors={errors}
            control={control}
            loading={loading}
            disabled={disabled}
            handleSubmit={handleSubmit}
        />
    );
};

export default Login;
