import styled from "styled-components";

export const styles = {
  Box: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
  },
  boxContentSession: {
    margin: "0px 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridColumn: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  gridContends: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};
export const GridContainer = styled.div<{ mTop?: string; mBottom?: string }>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 45%);
  margin-top: ${({ mTop }) => mTop || "0px"};
  margin-bottom: ${({ mBottom }) => mBottom || "20px"};
  grid-auto-flow: dense;
  grid-gap: 0px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 1520px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 90%);
  }
`;
