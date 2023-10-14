import React from 'react';
import { Modal, Typography, Box, IconButton } from '@mui/material';
import { ModalProps } from './types';
import { BoxContainer, styles } from './styled';
import CloseIcon from '@mui/icons-material/Close';
const ModalComponent: React.FC<ModalProps> = ({
    open,
    onClose,
    children,
    width,
    tittle,
    height,
}) => {
    return (
        <Modal open={open}>
            <BoxContainer width={width} height={height}>
                <Box sx={styles.boxChildren}>
                    <Typography style={styles.title}>{tittle}</Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {children}
            </BoxContainer>
        </Modal>
    );
};

export default ModalComponent;
