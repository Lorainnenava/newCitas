import React, { FC, useState } from "react";
import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";
import { ToolbarList } from "../../common/TableGrid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { TDataAppointmentList } from "./types";
import { ModalAlertConfirmation } from "../../common/modalAlert";

export const AppointmentListV: FC<TDataAppointmentList> = ({
  data,
  updateEstado,
  handleOpen,
  handleCloseModal,
  deleteOneDating,
  openModal,
  validateLoading,
  loadingUpdatedState,
  disabled,
  actions,
}) => {
  const [columns] = useState<GridColDef[]>([
    {
      field: "name",
      headerAlign: "center",
      align: "left",
      cellClassName: "cellRow",
      renderHeader: () => <b>NOMBRE</b>,
      flex: 1,
    },
    {
      field: "typeDocument",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>TIPO IDENTIFICACIÓN</b>,
      flex: 1,
    },
    {
      field: "NumDocument",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>NUMERO DE DOCUMENTO</b>,
      flex: 1,
    },
    {
      field: "doctor",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>DOCTOR</b>,
      flex: 1,
    },
    {
      field: "specialty",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      headerName: "Especialidad",
      renderHeader: () => <b>ESPECIALIDAD</b>,
      flex: 1,
    },
    {
      field: "state",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>ESTADO</b>,
      flex: 1,
      renderCell: (params) => {
        const { statusAppointment } = params.row;
        if (statusAppointment) {
          return <Typography sx={{ color: "green" }}>ACTIVO</Typography>;
        } else {
          return <Typography sx={{ color: "red" }}>INACTIVO</Typography>;
        }
      },
    },
    {
      field: "acción",
      headerAlign: "center",
      align: "center",
      cellClassName: "cellRow",
      renderHeader: () => <b>ACCIONES</b>,
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* <IconButton>
            <VisibilityIcon fontSize="small" color="success" />
          </IconButton> */}
          <IconButton
            onClick={() => {
              handleOpen(row?._id, row?.statusAppointment, "updated");
            }}
          >
            <EditIcon fontSize="small" color="primary" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleOpen(row?._id, row?.statusAppointment, "delete");
            }}
          >
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </Box>
      ),
    },
  ]);

  return (
    <>
      <Typography sx={text}>Lista de citas</Typography>
      <Box
        sx={{
          height: "80vh",
          background: "#fff",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <DataGrid
          columns={columns || []}
          rows={data || []}
          getRowId={(row) => row._id}
          density="compact"
          loading={validateLoading}
          pageSizeOptions={[20]}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          components={{
            Toolbar: ToolbarList,
          }}
        />
      </Box>
      <Box>
        <ModalAlertConfirmation
          state={openModal}
          handleCloseModal={handleCloseModal}
          title="Confirmar acción"
          subTitle={
            actions === "updated"
              ? "!Editar el estado de la cita¡"
              : "!Eliminar la cita, no se podrán revertir sus cambios¡"
          }
          confirmation="¿Estás seguro de continuar?"
          nameAccept={
            loadingUpdatedState ? <CircularProgress size={15} /> : "SI"
          }
          nameDecline="NO"
          onClickAccept={actions === "updated" ? updateEstado : deleteOneDating}
          disabledLoading={disabled}
        />
      </Box>
    </>
  );
};
