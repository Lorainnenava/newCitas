'use client';
import React from 'react';
import * as yup from 'yup';
import { useState } from 'react';
import ViewLogin from '@/views/SignIn';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { TypeAlertT } from '@/common/alert/types';
import { getSession, signIn } from 'next-auth/react';
import { handler } from '../../app/api/SignIn/route';
import { yupResolver } from '@hookform/resolvers/yup';
import { alertInitialState, validateEmail } from '@/utils';

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
            const signInPromise = await signIn('credentials', {
                redirect: false,
                email: data.email,
                password: data.password,
            });
            if (signInPromise?.ok !== true) {
                setLoading(false);
                toast('El usuario no existe.', {
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
