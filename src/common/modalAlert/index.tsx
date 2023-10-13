import React, { FC, useCallback, useEffect, useState } from "react";
import { Box, Button, Fade, Modal, Typography, useTheme } from "@mui/material";
import { styleSheet } from "./styled";
import WarningIcon from "@mui/icons-material/Warning";
import { TModalAlertConfirmation } from "./types";

export const ModalAlertConfirmation: FC<TModalAlertConfirmation> = ({
  title,
  subTitle,
  nameAccept,
  nameDecline,
  confirmation,
  state,
  onClickAccept,
  disabledLoading,
  handleCloseModal,
}) => {
  const theme = useTheme();
  const styles = styleSheet(theme);
  const [open, setOpen] = useState(state);
  const hide = useCallback(() => {
    setOpen(!state);
    handleCloseModal(false);
  }, [state, handleCloseModal]);

  useEffect(() => {
    setOpen(state);
  }, [state]);

  return (
    <Modal open={open}>
      <Fade in={open}>
        <Box sx={styles.modal}>
          <Box sx={styles.boxHeader}>
            <Typography sx={styles.title}>{title}</Typography>
            <Box sx={styles.boxIcon}>
              <WarningIcon fontSize="medium" sx={styles.warningIconStyle} />
            </Box>
          </Box>
          <Box sx={styles.boxInfo}>
            <Box sx={{ width: "100%" }}>
              <Typography sx={styles.subTitle}>{subTitle}</Typography>
              <Typography sx={styles.subTitle}>{confirmation}</Typography>
            </Box>
          </Box>
          <Box sx={styles.box}>
            <Button
              sx={styles.buttonOptionAccept}
              onClick={onClickAccept}
              disabled={disabledLoading}
            >
              {nameAccept}
            </Button>
            <Button
              sx={styles.buttonOptionDenied}
              variant="contained"
              color="error"
              onClick={hide}
              disabled={disabledLoading}
            >
              {nameDecline}
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
