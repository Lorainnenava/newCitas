import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 10%;
  background-color: #fafafa;
  display: flex;
  justify-content: space-around;
`;

export const HeaderImagen = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;

export const TituloHeader = styled.h1`
  width: 50%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const styles = {
  box: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
};
