import styled from "styled-components";
import imagenSignUp from "./img/imgSignUp.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export const Box1 = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ImagenSignup = styled.div`
  width: 50%;
  height: 98%;
  background-image: url(${imagenSignUp});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px 0px 0px 20px;
  margin: 7px 7px;
`;

export const Form = styled.form`
  display: flex;
  width: 75%;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  border-radius: 5px;
`;

export const Rows = styled.div`
  width: 100%;
  height: auto;
`;
export const ContenedorForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Inicio = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: end;
  color: #1976d2;
  &:hover {
    color: #3574af;
  }
`;

export const BoxHeader = styled.div`
  width: 100%;
`;
