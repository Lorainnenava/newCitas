import React from 'react';
import {
    Box,
    Carta,
    Container,
    IconoCarta,
    Portada,
    TituloCarta,
} from './styled';
import iniciarSesion from '../../../public/assets/img/logIn/login.png';
import registrar from '../../../public/assets/img/logIn/signUp.png';
import pregunta from '../../../public/assets/img/logIn/answer.png';
import { useRouter } from 'next/navigation';

const PaginaPrincipal = () => {
    const router = useRouter();
    return (
        <Container>
            <Portada>
                <Box>
                    <Carta
                        backgroundColor="#669CE1"
                        onClick={() => {
                            router.push('/SignIn');
                        }}
                    >
                        <IconoCarta imagenCarta={iniciarSesion.src} />
                        <TituloCarta>INGRESAR AL PORTAL</TituloCarta>
                    </Carta>
                    <Carta
                        backgroundColor="#669CE1"
                        onClick={() => router.push('/SignUp')}
                    >
                        <IconoCarta imagenCarta={registrar.src} />
                        <TituloCarta>REGISTRARSE</TituloCarta>
                    </Carta>
                    <Carta backgroundColor="#669CE1">
                        <IconoCarta imagenCarta={pregunta.src} />
                        <TituloCarta>PREGUNTAS FRECUENTES</TituloCarta>
                    </Carta>
                </Box>
            </Portada>
        </Container>
    );
};

export default PaginaPrincipal;
