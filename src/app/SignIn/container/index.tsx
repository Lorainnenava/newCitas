'use client';
import React from 'react';
import * as yup from 'yup';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateEmail } from '@/utils';
import ViewLogin from '@/app/SignIn/view';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react';
import { handler } from '../../api/createCookie/route';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
    /**
     * useStates
     */
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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
        handleSubmit,
        formState: { errors },
        getValues,
        control,
    } = useForm({ resolver: yupResolver(schema), mode: 'onBlur' });

    /**
     * crear credenciales de acceso y consultar ruta api SignIn
     */
    const credential = async (data: { email: string; password: string }) => {
        try {
            const signInPromise = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
            if (signInPromise?.ok !== true) {
                setLoading(false);
                toast('Los datos son incorrectos.', {
                    autoClose: 2000,
                    type: 'error',
                    hideProgressBar: false,
                });
            } else {
                const session = await getSession();
                const fetchPromise = await handler(session?.user.token);
                if (fetchPromise === true) {
                    router.push('/Dashboard');
                    setLoading(true);
                    toast('Se inicio sesion correctamente.', {
                        autoClose: 2000,
                        type: 'success',
                        hideProgressBar: false,
                    });
                }
            }
        } catch (error) {
            setLoading(false);
        }
    };

    /**
     * handleSubmitLogin
     */
    const handleSubmitLogin = () => {
        credential({
            email: getValues().email,
            password: getValues().password,
        });
    };

    return (
        <ViewLogin
            schema={schema}
            errors={errors}
            control={control}
            loading={loading}
            handleSubmit={handleSubmit}
            handleSubmitLogin={handleSubmitLogin}
        />
    );
};

export default Login;
