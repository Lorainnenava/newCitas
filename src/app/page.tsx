"use client";
import { Container } from "@/utils/styles";
import { Box } from "@mui/material";
import { Carta, IconoCarta, Portada, TituloCarta } from "./styled";
import { useRouter } from "next/navigation";
import iniciarSesion from "../../public/assets/img/logIn/logIn.png"
import registrar from "../../public/assets/img/logIn/register.png"
import pregunta from "../../public/assets/img/logIn/answer.png"

export default function Home() {

  const router= useRouter()
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
          <IconoCarta imagenCarta={iniciarSesion.src}/>
          <TituloCarta>INGRESAR AL PORTAL</TituloCarta>
        </Carta>
        <Carta backgroundColor="#5191c1" onClick={() => router.push("/SignUp")}>
          <IconoCarta imagenCarta={registrar.src} />
          <TituloCarta>REGISTRARSE</TituloCarta>
        </Carta>
        <Carta backgroundColor="#5191c1">
          <IconoCarta imagenCarta={pregunta.src} />
          <TituloCarta>PREGUNTAS FRECUENTES</TituloCarta>
        </Carta>
      </Box>
    </Portada>
  </Container>
  );
}
