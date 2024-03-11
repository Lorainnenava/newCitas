import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../utils/colors/colors';
import { ToolbarList } from '../../common/TableGrid';
import { DataGrid, GridColDef, esES } from '@mui/x-data-grid';

const TableComponent = () => {
    // CONTENIDO DE LA TABLA
    const columns: GridColDef[] = [
        {
            field: 'name',
            headerAlign: 'center',
            align: 'left',
            cellClassName: 'cellRow',
            renderHeader: () => <b>NOMBRE</b>,
            flex: 1,
        },
        {
            field: 'documentType',
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'cellRow',
            renderHeader: () => <b>TIPO IDENTIFICACIÓN</b>,
            flex: 1,
        },
        {
            field: 'identification',
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'cellRow',
            renderHeader: () => <b>IDENTIFICACIÓN</b>,
            flex: 1,
        },
        {
            field: 'date',
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'cellRow',
            renderHeader: () => <b>FECHA</b>,
            flex: 1,
        },
        {
            field: 'dateAppointment',
            headerAlign: 'center',
            align: 'center',
            cellClassName: 'cellRow',
            renderHeader: () => <b>HORA</b>,
            flex: 1,
        },
    ];

    const data = [
        {
            _id: 1,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 2,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 3,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 4,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 5,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 6,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 7,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 8,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
        {
            _id: 9,
            name: 'Lorainne Navarro Carrillo',
            documentType: 'Cedula',
            identification: 1041589632,
            date: '18-03-2024',
            dateAppointment: '10:20 AM',
        },
    ];
    return (
        <>
            <Box
                sx={{
                    width: '98%',
                    height: '25px',
                    padding: '10px',
                    borderRadius: '8px 8px 0px 0px',
                    backgroundColor: colors.first,
                }}
            >
                <Typography sx={{ color: 'white' }}>
                    <b>PROXIMAS CITAS</b>
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: '41vh',
                    borderRadius: '5px',
                    background: '#fff',
                }}
            >
                <DataGrid
                    sx={{ border: 'none' }}
                    columns={columns || []}
                    rows={data || []}
                    getRowId={(row) => row._id}
                    density="compact"
                    pageSizeOptions={[10]}
                    localeText={
                        esES.components.MuiDataGrid.defaultProps.localeText
                    }
                    components={{
                        Toolbar: ToolbarList,
                    }}
                />
            </Box>
        </>
    );
};

export default TableComponent;
