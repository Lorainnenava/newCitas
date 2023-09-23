import React, { FC } from "react";
import { BoxButton, Form, styles } from "../../containers/views/styled";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { BoxText, Containers, CssTextField, text } from "../../styled";
import { MedicalInformation } from "./medicalInformation";
import { TRegisterPatient } from "./types";
import { validateRequired, validateRequiredSelect } from "../../utils";
import { SelectAdapter } from "../../common/FormAdaptar/selectAdapter";
import { DateInputAdapter } from "../../common/FormAdaptar/dateInputAdapter";
export const RegisterPatientV: FC<TRegisterPatient> = ({
  handleChangue,
  handleSubmit,
  dataForm,
  required,
  dataSelects,
  handleChangueSelect,
  loading,
}) => {
  return (
    <>
      <Box
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography style={text}>REGISTRAR PACIENTE</Typography>
      </Box>
      <Form>
        <Containers>
          <BoxText>
            <Typography style={{ marginLeft: "20px" }}>
              Información personal
            </Typography>
          </BoxText>
          <Grid
            container
            spacing={2}
            columns={{ xs: 2, sm: 8, md: 9, lg: 12 }}
            style={{ padding: "20px" }}
          >
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <SelectAdapter
                label="Tipo de documento"
                name="typeOfDocument"
                onChange={handleChangueSelect}
                borderColor={validateRequiredSelect(
                  !dataForm?.typeOfDocument,
                  required
                )}
                options={
                  dataSelects?.dataDocument?.map((x) => {
                    return {
                      value: x?._id,
                      label: x?.typeOfDocument,
                    };
                  }) || []
                }
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Numero de identificación"
                name="identification"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.identification, required)}
                border={validateRequired(!dataForm?.identification, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Nombre"
                name="firstName"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.firstName, required)}
                border={validateRequired(!dataForm?.firstName, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Apellidos"
                name="firstSurname"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.firstSurname, required)}
                border={validateRequired(!dataForm?.firstSurname, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Edad"
                name="age"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.age, required)}
                border={validateRequired(!dataForm?.age, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Sexo"
                name="gender"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.gender, required)}
                border={validateRequired(!dataForm?.gender, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <DateInputAdapter
                label="Fecha de nacimiento"
                name="dateOfBirth"
                onChange={handleChangue}
                borderColor={validateRequiredSelect(
                  !dataForm?.dateOfBirth,
                  required
                )}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Lugar de nacimiento"
                name="placeOfBirth"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.placeOfBirth, required)}
                border={validateRequired(!dataForm?.placeOfBirth, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Correo electrónico"
                name="email"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.email, required)}
                border={validateRequired(!dataForm?.email, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Celular"
                name="phoneNumber"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.phoneNumber, required)}
                border={validateRequired(!dataForm?.phoneNumber, required)}
                onChange={handleChangue}
              />
            </Grid>
            <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
              <CssTextField
                label="Dirección"
                name="address"
                id="outlined-basic"
                size="small"
                colors={validateRequired(!dataForm?.address, required)}
                border={validateRequired(!dataForm?.address, required)}
                onChange={handleChangue}
              />
            </Grid>
          </Grid>
        </Containers>
        <MedicalInformation
          handleChangue={handleChangue}
          dataForm={dataForm}
          required={required}
        />
      </Form>
      <BoxButton>
        <Button
          onClick={handleSubmit}
          type="submit"
          startIcon={
            loading ? (
              <CircularProgress size={20} />
            ) : (
              <SaveAsIcon fontSize="small" />
            )
          }
          sx={{
            width: "130px",
            backgroundColor: "#6f95ff",
            color: "white",
            margin: "10px 0px  10px 15px",
            boxShadow: "0px 0px 10px 0px gray",
            '&:hover': {
              backgroundColor: "#6689e9",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "0.8em", fontWeight: "bold", color: "#fff" }}
          >
            Guardar
          </Typography>
        </Button>
      </BoxButton>
    </>
  );
};
