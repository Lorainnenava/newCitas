'use client';

import {
    Box,
    Menu,
    Stack,
    Button,
    Avatar,
    Tooltip,
    IconButton,
} from '@mui/material';
import Image from 'next/image';
import { TNavBar } from './types';
import ModalComponent from '../modal';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Header, HeaderImagen, styles } from './styled';
import { CloseSession } from './ContentModal/closeSession';
import logoNav from '../../../public/assets/img/main/logoNav.png';

const Nav: FC<TNavBar> = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
        router.push('/');
    };

    return (
        <>
            {status !== 'loading' && status !== 'unauthenticated' && (
                <Header>
                    <HeaderImagen>
                        <Image
                            src={logoNav}
                            alt="logo"
                            width={280}
                            height={90}
                            onClick={() => {
                                router.push('/Dashboard');
                            }}
                        />
                    </HeaderImagen>
                    <Box sx={{ display: 'flex', width: '50%' }}>
                        <Stack
                            direction="row"
                            alignItems={'center'}
                            spacing={2}
                            width={'100%'}
                            justifyContent={'end'}
                        >
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={
                                        open ? 'account-menu' : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
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
                                <Box sx={styles.box}>{session?.user.name}</Box>
                                <Box sx={styles.box}>{session?.user.email}</Box>
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
                        <CloseSession
                            onClose={handleCloseModal}
                            logout={logout}
                        />
                    </ModalComponent>
                </Header>
            )}
        </>
    );
};

export default Nav;
