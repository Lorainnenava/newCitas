import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 90%;
`;
export const style = {
  button: {
    height: "25px",
    backgroundColor: "#6f95ff",
    color: "white",
    "&:hover": {
      backgroundColor: "#6689e9",
    },
  },
  buttonText: {
    fontSize: "0.8em",
    fontWeight: "bold",
    color: "#fff",
  },
};
