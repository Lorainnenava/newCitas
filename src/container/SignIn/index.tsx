'use client';
import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { userLogin } from '@/redux/features/login/request';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { alertInitialState } from '@/utils';
import ViewLogin from '@/views/SignIn';
import { loginInitialState } from '@/views/SignIn/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { TypeAlertT } from '@/common/alert/types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Login = () => {
    /**
     * useStates
     */
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState<boolean>(false);
    const [dataForm, setDataForm] = useState(loginInitialState);
    const [showAlert, setShowAlert] = useState<TypeAlertT>(alertInitialState);

    /**
     * userLoguinSelector
     */
    const userLoguinSelector = useAppSelector((state) => state.root.userLogin);

    const schema = yup.object().shape({
        email: yup.string().required("El correo es requerido"),
        password: yup.string().min(4, "").max(10).required("la contraseña es requerida"),
    });
    const {
        register,
        handleSubmit: onSubmit,
        formState: { errors },
        reset,
    } = useForm({resolver: yupResolver(schema)});

    /**
     * handleChangue
     */
    const handleChangue = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        e.preventDefault();
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        });
    };

    /**
     * handleSubmit
     */
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!dataForm?.email || !dataForm?.password) {
            setRequired(true);
            setShowAlert({
                active: true,
                message: 'Ha ocurrido una incidencia.',
                type: 'danger',
                time: 2000,
            });
        } else {
            setLoading(true);
            dispatch(userLogin(dataForm));
            try {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: dataForm.email,
                    password: dataForm.password,
                });
                if (result?.error) {
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
            }
            router.push('/User');
        }
    };

    /**
     * useEffect para redirigir segun el rol y guardar en el localStorage
     */
    /*     useEffect(() => {
        if (userLoguinSelector?.data) {
            if (userLoguinSelector?.data?.user?.role === 'usuario') {
                setLoading(false);
                router.push('/User');
                localStorage.setItem(
                    'auth',
                    JSON.stringify({
                        email: userLoguinSelector?.data?.user?.email,
                        role: userLoguinSelector?.data?.user?.role,
                        token: userLoguinSelector?.data?.token,
                    })
                );
            }
        }
    }, [userLoguinSelector, router]); */

    return (
        <ViewLogin
            router={router}
            loading={loading}
            dataForm={dataForm}
            required={required}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
            handleSubmit={handleSubmit}
            handleChangue={handleChangue}
        />
    );
};

export default Login;
