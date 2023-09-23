import React from "react";
import {
  Box,
  Carta,
  Container,
  IconoCarta,
  Portada,
  TituloCarta,
} from "./styled";
import {iniciarSesion} from "../../../public/assets/img/logIn/logIn.png";
import registrar from "../../assets/img/logIn/register.png";
import pregunta from "../../assets/img/logIn/answer.png";
import { useRouter } from "next/navigation";

const PaginaPrincipal = () => {
  const router = useRouter();
  return (
    <Container>
      <Portada>
        <Box>
          <Carta
            backgroundColor="#5191c1"
            onClick={() => {
              router.push("/Login");
            }}
          >
            <IconoCarta imagenCarta={iniciarSesion} />
            <TituloCarta>INGRESAR AL PORTAL</TituloCarta>
          </Carta>
          <Carta
            backgroundColor="#5191c1"
            onClick={() => router.push("/SignUp")}
          >
            <IconoCarta imagenCarta={registrar} />
            <TituloCarta>REGISTRARSE</TituloCarta>
          </Carta>
          <Carta backgroundColor="#5191c1">
            <IconoCarta imagenCarta={pregunta} />
            <TituloCarta>PREGUNTAS FRECUENTES</TituloCarta>
          </Carta>
        </Box>
      </Portada>
    </Container>
  );
};

export default PaginaPrincipal;
