'use client';
import React from 'react';
import {
    Box,
    Carta,
    Portada,
    Container,
    IconoCarta,
    TituloCarta,
} from './styled';
import { useRouter } from 'next/navigation';
import pregunta from '../../../public/assets/img/logIn/answer.png';
import registrar from '../../../public/assets/img/logIn/signUp.png';
import iniciarSesion from '../../../public/assets/img/logIn/login.png';

const PaginaPrincipal = () => {
    const router = useRouter();
    return (
        <Container>
            <Portada>
                <Box>
                    <Carta
                        backgroundcolor="#669CE1"
                        onClick={() => {
                            router.push('/SignIn');
                        }}
                    >
                        <IconoCarta imagencarta={iniciarSesion.src} />
                        <TituloCarta>INGRESAR AL PORTAL</TituloCarta>
                    </Carta>
                    <Carta
                        backgroundcolor="#669CE1"
                        onClick={() => router.push('/SignUp')}
                    >
                        <IconoCarta imagencarta={registrar.src} />
                        <TituloCarta>REGISTRARSE</TituloCarta>
                    </Carta>
                    <Carta backgroundcolor="#669CE1">
                        <IconoCarta imagencarta={pregunta.src} />
                        <TituloCarta>PREGUNTAS FRECUENTES</TituloCarta>
                    </Carta>
                </Box>
            </Portada>
        </Container>
    );
};

export default PaginaPrincipal;
