import styled from "styled-components";
export const styles = {
  title: {
    fontSize: "24px",
    fontFamily: "Roboto",
  },
  boxChildren: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid",
  },
};

export const BoxContainer = styled.div<{ width: string; height?: string }>`
  margin: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "auto")};
  background: white;
  padding: 20px;
  height: ${({ height }) => (height ? height : "auto")};
`;
