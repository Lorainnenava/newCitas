import React, { FC } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { Span, Text } from "../../containers/views/styled";
import { TDetailsPatientV } from "./types";
import { GridContainer, styles } from "./style";

export const DetailsPatientV: FC<TDetailsPatientV> = ({
  validateLoading,
  data,
}) => {
  return (
    <Box sx={styles.Box}>
      <Grid container>
        <Grid sm={12} item sx={styles.gridContends}>
          <Box sx={styles.boxContentSession}>
            <Grid sx={{ width: "100%", height: "auto" }}>
              <GridContainer>
                {/* Nombre */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Nombre(s):</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.names}`
                    )}
                  </Text>
                </Grid>
                {/* Apellidos */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Apellidos(s):</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.lasNames}`
                    )}
                  </Text>
                </Grid>
                {/* Edad */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Edad:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.age}`
                    )}
                  </Text>
                </Grid>
                {/* Sexo */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Sexo:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.gender}`
                    )}
                  </Text>
                </Grid>
                {/* Fecha de Nacimiento */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Fecha de Nacimiento:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.dateOfBirth}`
                    )}
                  </Text>
                </Grid>
                {/* Lugar de nacimiento */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Lugar de nacimiento:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.placeOfBirth}`
                    )}
                  </Text>
                </Grid>
                {/* Correo electronico */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Correo electronico:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.email}`
                    )}
                  </Text>
                </Grid>
                {/* Celular */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Celular:</b>
                  </Span>
                  <Text>
                    {validateLoading ? (
                      <CircularProgress size={15} color="inherit" />
                    ) : (
                      `${data?.phoneNumber}`
                    )}
                  </Text>
                </Grid>
                {/* Celular para emergencias */}
                <Grid sx={styles.gridColumn}>
                  <Span>
                    <b>Celular para emergencias:</b>
                  </Span>
                  <Text>3045861298</Text>
                </Grid>
              </GridContainer>
            </Grid>
          </Box>
          <Typography
            style={{
              fontSize: "24px",
              fontFamily: "Roboto",
              borderBottom: "1px solid",
            }}
          >
            Informacion medica
          </Typography>
          <Box sx={styles.boxContentSession}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Grid sx={{ width: "100%", height: "auto" }}>
                <GridContainer>
                  {/* Tipo de sangre */}
                  <Grid sx={styles.gridColumn}>
                    <Span>
                      <b>Tipo de sangre:</b>
                    </Span>
                    <Text>
                      {validateLoading ? (
                        <CircularProgress size={15} color="inherit" />
                      ) : (
                        `${data?.idMedicalInformation?.bloodType}`
                      )}
                    </Text>
                  </Grid>
                  {/* Alergias */}
                  <Grid sx={styles.gridColumn}>
                    <Span>
                      <b>Alergias:</b>
                    </Span>
                    <Text>
                      {validateLoading ? (
                        <CircularProgress size={15} color="inherit" />
                      ) : (
                        `${data?.idMedicalInformation?.allergies}`
                      )}
                    </Text>
                  </Grid>
                  {/* Enfermedades */}
                  <Grid sx={styles.gridColumn}>
                    <Span>
                      <b>Enfermedades:</b>
                    </Span>
                    <Text>
                      {validateLoading ? (
                        <CircularProgress size={15} color="inherit" />
                      ) : (
                        `${data?.idMedicalInformation?.illnesses}`
                      )}
                    </Text>
                  </Grid>
                  {/* Cirugias */}
                  <Grid sx={styles.gridColumn}>
                    <Span>
                      <b>Cirugias:</b>
                    </Span>
                    <Text>
                      {validateLoading ? (
                        <CircularProgress size={15} color="inherit" />
                      ) : (
                        `${data?.idMedicalInformation?.surgeries}`
                      )}
                    </Text>
                  </Grid>
                  <Grid sx={styles.gridColumn}>
                    {/* Observaciones */}
                    <Span>
                      <b>Observaciones</b>
                    </Span>
                    <Text>
                      {validateLoading ? (
                        <CircularProgress size={15} color="inherit" />
                      ) : (
                        `${data?.idMedicalInformation?.observations}`
                      )}
                    </Text>
                  </Grid>
                </GridContainer>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
