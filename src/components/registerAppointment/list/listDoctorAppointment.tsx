import React, { FC } from "react";
import { style } from "../styled";
import SaveIcon from "@mui/icons-material/Save";
import { CircularProgress } from "@mui/material";
import { TListDoctorAppointment } from "../types";
import { Box, Button, Typography } from "@mui/material";
import { ToolbarList } from "../../../common/TableGrid";
import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";

export const ListDoctorAppointment: FC<TListDoctorAppointment> = ({
  loading,
  dataList,
  dataForm,
  setDataForm,
  handleSubmit,
  validateLoading,
}) => {
  // CONTENIDO DE LA TABLA
  const columns: GridColDef[] = [
    {
      field: "doctor",
      headerAlign: "center",
      align: "left",
      cellClassName: "cellRow",
      renderHeader: () => <b>DOCTOR</b>,
      flex: 1,
    },
    {
      field: "specialty",
      headerAlign: "center",
      align: "left",
      cellClassName: "cellRow",
      renderHeader: () => <b>ESPECIALIDAD</b>,
      flex: 1,
    },
    {
      field: "date",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>FECHA</b>,
      flex: 1,
    },
    {
      field: "timeAppointment",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>HORA</b>,
      flex: 1,
    },
    {
      field: "ACCIONES",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>ACCIONES</b>,
      flex: 1,
      renderCell: (row) => (
        <>
          <Button
            sx={style.button}
            onClick={() => {
              setDataForm({
                ...dataForm,
                timeAppointment: row?.row?.timeAppointment,
              });
            }}
            type="submit"
            startIcon={
              loading ? (
                <CircularProgress size={20} />
              ) : (
                <SaveIcon fontSize="small" />
              )
            }
          >
            <Typography sx={style.buttonText}>ASIGNAR</Typography>
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          height: "60vh",
          background: "#fff",
          width: "100%",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <DataGrid
          sx={{ border: "none" }}
          columns={columns || []}
          rows={dataList || []}
          getRowId={(row) => row._id}
          loading={validateLoading}
          density="compact"
          pageSizeOptions={[20]}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          components={{
            Toolbar: ToolbarList,
          }}
        />
      </Box>
    </>
  );
};
