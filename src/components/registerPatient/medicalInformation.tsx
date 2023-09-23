import { Grid, Typography } from "@mui/material";
import { BoxText, Containers, CssTextField } from "../../styled";
import { styles } from "../../containers/views/styled";
import { validateRequired } from "../../utils";

export const MedicalInformation = ({
  handleChangue,
  dataForm,
  required,
}: any) => {
  return (
    <Containers>
      <BoxText>
        <Typography style={{ marginLeft: "20px" }}>
          Informacion medica
        </Typography>
      </BoxText>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, sm: 8, md: 9, lg: 12 }}
        style={{ padding: "20px" }}
      >
        <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
          <CssTextField
            label="Tipo de sangre"
            name="bloodType"
            id="outlined-basic"
            size="small"
            colors={validateRequired(!dataForm?.bloodType, required)}
            border={validateRequired(!dataForm?.bloodType, required)}
            onChange={handleChangue}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
          <CssTextField
            label="Alergias"
            name="allergies"
            id="outlined-basic"
            size="small"
            colors={validateRequired(!dataForm?.allergies, required)}
            border={validateRequired(!dataForm?.allergies, required)}
            onChange={handleChangue}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
          <CssTextField
            label="Enfermedades"
            name="illnesses"
            id="outlined-basic"
            size="small"
            colors={validateRequired(!dataForm?.illnesses, required)}
            border={validateRequired(!dataForm?.illnesses, required)}
            onChange={handleChangue}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
          <CssTextField
            label="Cirugias"
            name="surgeries"
            id="outlined-basic"
            size="small"
            colors={validateRequired(!dataForm?.surgeries, required)}
            border={validateRequired(!dataForm?.surgeries, required)}
            onChange={handleChangue}
          />
        </Grid>
      </Grid>
    </Containers>
  );
};
