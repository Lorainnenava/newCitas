import React from "react";
import { DataGrid, GridColDef, esES } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModalComponent from "../../common/modal";
import InfoUser from "../../containers/detailsPatient";
import { Box, Typography, IconButton } from "@mui/material";
import { text } from "../../styled";
import { ToolbarList } from "../../common/TableGrid";

export const ListPatientV = ({
  setRows,
  openModal,
  handleOpen,
  handleCloseModal,
  data,
  validateLoading,
  rows,
  profileAuth,
}: any) => {
  
  // CONTENIDO DE LA TABLA
  const columns: GridColDef[] = [
    {
      field: "name",
      headerAlign: "center",
      align: "left",
      cellClassName: 'cellRow',
      renderHeader: () => <b>NOMBRE</b>,
      flex: 1,
    },
    {
      field: "DocumentType",
      headerAlign: "center",
      align: "center",
      cellClassName: 'cellRow',
      renderHeader: () => <b>TIPO IDENTIFICACIÓN</b>,
      flex: 1,
    },
    {
      field: "identification",
      headerAlign: "center",
      align: "center",
      cellClassName: 'cellRow',
      renderHeader: () => <b>IDENTIFICACIÓN</b>,
      flex: 1,
    },
    {
      field: "email",
      headerAlign: "center",
      align: "center",
      cellClassName: 'cellRow',
      renderHeader: () => <b>CORREO</b>,
      flex: 1,
    },
    {
      field: "mobileNumber",
      headerAlign: "center",
      align: "center",
      cellClassName: 'cellRow',
      renderHeader: () => <b>NUMERO DE TELÉFONO</b>,
      flex: 1,
    },
    {
      field: "ACCIONES",
      headerAlign: "center",
      align: "center",
      cellClassName: 'cellRow',
      renderHeader: () => <b>ACCIONES</b>,
      flex: 1,
      renderCell: ({ row }) => (
        <>
          <IconButton
            onClick={() => {
              handleOpen();
              setRows(row?._id);
            }}
          >
            <RemoveRedEyeIcon style={{ color: "gray" }} />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <Typography sx={text}>Lista de pacientes</Typography>
      <Box
        sx={{
          height: "75vh",
          background: "#fff",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <DataGrid
          sx={{ border: "none" }}
          columns={columns || []}
          rows={data || []}
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
      <ModalComponent
        open={openModal}
        onClose={handleCloseModal}
        width="60%"
        height="55%"
        tittle="Informacion del Usuario"
      >
        <InfoUser id={rows} profileAuth={profileAuth} />
      </ModalComponent>
    </>
  );
};
