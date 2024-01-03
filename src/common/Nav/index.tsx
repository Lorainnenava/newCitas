'use client';

import { TNavBar } from './types';
import ModalMaster from '../modal';
import { colors } from '../colors/colors';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Container, Header } from './styled';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './acountMenu/acountMenu';
import { SessionModal } from './sessionModal/sessionModal';

const Nav: FC<TNavBar> = ({ setActive, matches, active }) => {
    const router = useRouter();

    const { data: session, status } = useSession();
    const [openModal, setOpenModal] = useState(false);

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
                <Container>
                    <Header>
                        <Box
                            sx={{
                                width: '98%',
                                margin: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent:
                                    matches !== true
                                        ? 'space-between'
                                        : 'flex-end',
                            }}
                        >
                            {matches !== true && (
                                <Button
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        width: 'auto',
                                        color: `${colors.first}`,
                                    }}
                                    onClick={() => setActive(!active)}
                                >
                                    <MenuIcon
                                        sx={{
                                            fontSize: '1rm',
                                        }}
                                    />
                                </Button>
                            )}
                            <AccountMenu
                                session={session!}
                                setOpenModal={setOpenModal}
                            />
                        </Box>
                        <ModalMaster
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            width="400px"
                            tittle="Quiere cerrar la sesión?"
                        >
                            <SessionModal logout={logout} />
                        </ModalMaster>
                    </Header>
                </Container>
            )}
        </>
    );
};

export default Nav;
