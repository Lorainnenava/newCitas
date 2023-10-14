import React, { FC } from 'react';
import { Box } from './styled';
import {
    Accordion,
    Typography,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Link from 'next/link';
import { TLayout } from './types';

export const Layout: FC<TLayout> = ({ profileAuth }) => {
    return (
        <>
            {profileAuth?.user?.role === 'Admi' ? (
                <Box>
                    <Accordion sx={{ backgroundcolor: '#C5DFF8' }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ backgroundcolor: '#5A96E3' }}
                        >
                            <Diversity1Icon sx={{ marginRight: '5px' }} />
                            <Typography>PACIENTES</Typography>
                        </AccordionSummary>
                        <Link
                            href="/registrarUsuario"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>ACTUALIZAR DATOS</Typography>
                            </AccordionDetails>
                        </Link>
                        <Link
                            href="/listaUsuarios"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>LISTA DE PACIENTE</Typography>
                            </AccordionDetails>
                        </Link>
                    </Accordion>
                    <Accordion sx={{ backgroundcolor: '#C5DFF8' }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ backgroundcolor: '#5A96E3' }}
                        >
                            <EditCalendarIcon sx={{ marginRight: '5px' }} />
                            <Typography>CITAS</Typography>
                        </AccordionSummary>
                        <Link
                            href="/register"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>CRONOGRAMA DE CITAS</Typography>
                            </AccordionDetails>
                        </Link>
                    </Accordion>
                </Box>
            ) : (
                <Box>
                    <Accordion sx={{ backgroundcolor: '#C5DFF8' }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ backgroundcolor: '#5A96E3' }}
                        >
                            <Diversity1Icon sx={{ marginRight: '5px' }} />
                            <Typography>USUARIO</Typography>
                        </AccordionSummary>
                        <Link
                            href="/registrarUsuario"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>ACTUALIZAR DATOS</Typography>
                            </AccordionDetails>
                        </Link>
                    </Accordion>
                    <Accordion sx={{ backgroundcolor: '#C5DFF8' }}>
                        <AccordionSummary
                            expandIcon={<GridExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            sx={{ backgroundcolor: '#5A96E3' }}
                        >
                            <EditCalendarIcon sx={{ marginRight: '5px' }} />
                            <Typography>CITAS</Typography>
                        </AccordionSummary>
                        <Link
                            href="/register"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>SOLICITAR CITA</Typography>
                            </AccordionDetails>
                        </Link>
                        <Link
                            href="/*"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <AccordionDetails sx={{ padding: '10px' }}>
                                <Typography>HISTORIAL DE CITAS</Typography>
                            </AccordionDetails>
                        </Link>
                    </Accordion>
                </Box>
            )}
        </>
    );
};
