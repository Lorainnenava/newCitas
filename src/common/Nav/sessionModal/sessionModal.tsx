import React from 'react';
import { Button } from '@mui/material';
import { TSessionModal } from './types';
import { Typography, Box } from '@mui/material';

export const SessionModal: React.FC<TSessionModal> = ({ logout }) => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '10%',
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: ' space-around',
                    flexDirection: 'column',
                }}
            >
                <Typography>Estas seguro de querer cerrar la sesión</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginTop: '5px',
                }}
            >
                <Button variant="contained" color="error" onClick={logout}>
                    Si
                </Button>
            </Box>
        </>
    );
};
