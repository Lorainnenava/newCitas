import { Box } from "@mui/material";
import React, { FC } from "react";
import { TAdmin } from "./types";
import img from "../../../public/assets/img/imgMain.jpg";

const PrincipalView: FC<TAdmin> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        margin: "0px",
        backgroundImage: ` url(${img.src})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  );
};

export default PrincipalView;