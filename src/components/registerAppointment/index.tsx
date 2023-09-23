import React from "react";
import { TRegisterAppointment } from "./types";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { validateRequiredSelect } from "../../utils";
import { styles } from "../../containers/views/styled";
import { BoxText, Containers, text } from "../../styled";
import { Box, Grid, Typography, Button } from "@mui/material";
import { ListDoctorAppointment } from "./list/listDoctorAppointment";
import { SelectAdapter } from "../../common/FormAdaptar/selectAdapter";
import { DateInputAdapter } from "../../common/FormAdaptar/dateInputAdapter";

export const RegisterAppointmentV: React.FC<TRegisterAppointment> = ({
  list,
  setList,
  loading,
  dataForm,
  required,
  dataList,
  setDataForm,
  dataSelects,
  handleSubmit,
  handleChangue,
  validateLoading,
  handleChangueSelect,
}) => {
  const theme = useTheme();
  /**
   * style
   */
  const style = {
    title: {
      fontSize: "1em",
      marginBottom: "10px",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      borderBottom: `1px solid #000`,
      color: `${theme}`,
      margin: "5px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    grid: {
      padding: "20px",
      flexWrap: "wrap",
      marginBottom: "5px",
    },
    button: {
      height: "35px",
      margin: "12px 10px 0px 0px",
      backgroundColor: "#6f95ff",
      color: "white",
      "&:hover": {
        backgroundColor: "#6689e9",
      },
      paddingLeft: "20px",
    },
    buttonText: {
      fontSize: "0.8em",
      fontWeight: "bold",
      color: "#fff",
    },
  };
  return (
    <>
      <Typography style={text}>SOLICITAR CITA</Typography>
      <Containers>
        <BoxText>
          <Typography style={{ marginLeft: "20px" }}>Información</Typography>
        </BoxText>
        <Grid
          container
          spacing={2}
          columns={{ xs: 2, sm: 8, md: 9, lg: 12 }}
          style={{
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
            <SelectAdapter
              label="Especialidad"
              name="specialty"
              onChange={handleChangueSelect}
              borderColor={validateRequiredSelect(
                !dataForm?.specialty,
                required
              )}
              options={
                dataSelects?.specialty?.map(
                  (x: { _id: string; specialty: string }) => {
                    return {
                      value: x?._id,
                      label: x?.specialty,
                    };
                  }
                ) || []
              }
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
            <SelectAdapter
              label="Doctor"
              name="doctor"
              onChange={handleChangueSelect}
              borderColor={validateRequiredSelect(!dataForm?.doctor, required)}
              style={{
                backgroundColor: !dataForm?.specialty ? "#e6e6e6" : "",
              }}
              disabled={!dataForm?.specialty}
              options={
                dataSelects?.dataDoctor
                  ?.filter(
                    (x: { specialty: { _id: string } }) =>
                      x?.specialty?._id === dataForm?.specialty
                  )
                  ?.map(
                    (x: {
                      _id: string;
                      name: string;
                      specialty: { _id: string };
                    }) => {
                      return {
                        value: x?._id,
                        label: x?.name,
                      };
                    }
                  ) || []
              }
            />
          </Grid>
          <Grid item xs={2} sm={4} md={3} lg={3} style={styles}>
            <DateInputAdapter
              label="Fecha"
              name="date"
              id="outlined-basic"
              size="small"
              onChange={handleChangue}
              borderColor={validateRequiredSelect(!dataForm?.date, required)}
            />
          </Grid>
          <Box
            sx={{
              width: "100px",
              display: "flex",
              height: "auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={style.button}
              startIcon={<SearchIcon fontSize="small" />}
              onClick={() => {
                setList(true);
              }}
            />
          </Box>
        </Grid>
      </Containers>
      {list === true ? (
        <ListDoctorAppointment
          loading={loading}
          dataForm={dataForm}
          dataList={dataList}
          setDataForm={setDataForm}
          handleSubmit={handleSubmit}
          validateLoading={validateLoading}
        />
      ) : null}
    </>
  );
};
