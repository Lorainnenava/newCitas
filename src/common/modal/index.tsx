import * as React from 'react';
import { styles } from './styled';
import { ModalProps } from './types';
import Dialog from '@mui/material/Dialog';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export const ModalMaster: React.FC<ModalProps> = ({
    open,
    width,
    tittle,
    onClose,
    children,
}) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={styles.boxChildren}
            >
                <Box sx={{ width: width }}>
                    <Box sx={styles.boxHeader}>
                        <DialogTitle id="alert-dialog-title">
                            {tittle}
                        </DialogTitle>
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {children}
                        </DialogContentText>
                    </DialogContent>
                </Box>
            </Dialog>
        </>
    );
};

export default ModalMaster;
