'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { alertInitialState, validateEmail } from '@/utils';
import ViewLogin from '@/views/SignIn';
import { yupResolver } from '@hookform/resolvers/yup';
import { TypeAlertT } from '@/common/alert/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'react-toastify';

const Login = () => {
    /**
     * useStates
     */
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState<TypeAlertT>(alertInitialState);

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
            const signInPromise = signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
            const fetchPromise = fetch('/api/SignIn', {
                method: 'PATCH',
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });
            const [result, response] = await Promise.all([
                signInPromise,
                fetchPromise,
            ]);
            if (!result?.ok && !response.ok) {
                setLoading(false);
                toast('El usuario no existe.', {
                    autoClose: 2000,
                    type: 'error',
                    hideProgressBar: false,
                });
            } else {
                router.push('/Dashboard');
                setLoading(true);
                toast('Se inicio sesion correctamente.', {
                    autoClose: 2000,
                    type: 'success',
                    hideProgressBar: false,
                });
                router.refresh();
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
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            handleSubmit={handleSubmit}
            handleSubmitLogin={handleSubmitLogin}
        />
    );
};

export default Login;
