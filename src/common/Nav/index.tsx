import React, { FC, useState } from "react";
import { Header, HeaderImagen, TituloHeader, styles, Image} from "./styled";
import { useRouter } from "next/navigation";
import {
  Box,
  Menu,
  Stack,
  Button,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import ModalComponent from "../modal";
import { CloseSession } from "./ContentModal/closeSession";
const Nav: FC<TNavBar> = ({ profileAuth }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  /**
   * Función para cerrar session
   */
  const logout = () => {
    setOpenModal(false);
    router.push("/");
  };

  return (
    <>
      {profileAuth === null ? (
        <Header>
          <HeaderImagen>
            <Image
              src={img}
              alt="logo"
              onClick={() => {
                router.push("/");
              }}
            />
          </HeaderImagen>
          <TituloHeader>Oficina Virtual</TituloHeader>
        </Header>
      ) : (
        <Header>
          <HeaderImagen>
            <Image
              onClick={() => {
                router.push("/");
              }}
            />
          </HeaderImagen>
          <Box sx={{ display: "flex", width: "50%" }}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={2}
              width={"100%"}
              justifyContent={"end"}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
              >
                <Box sx={styles.box}>{profileAuth?.user?.name}</Box>
                <Box sx={styles.box}>{profileAuth?.user?.mobileNumber}</Box>
                <Box sx={styles.box}>{profileAuth?.user?.email}</Box>
                <Box sx={styles.box}>
                  <Button onClick={handleOpen}>
                    <LogoutIcon />
                  </Button>
                </Box>
              </Menu>
            </Stack>
          </Box>
          <ModalComponent
            open={openModal}
            onClose={handleCloseModal}
            width="400px"
            tittle="Confirme sesión"
          >
            <CloseSession onClose={handleCloseModal} logout={logout} />
          </ModalComponent>
        </Header>
      )}
    </>
  );
};

export default Nav;

