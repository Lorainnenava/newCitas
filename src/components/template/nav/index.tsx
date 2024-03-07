'use client';

import DrawerComponent from './drawer';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ModalMaster from '../../../common/modal';
import AccountMenu from './acountMenu/acountMenu';
import { BoxNav, Container, Header } from './styled';
import { SessionModal } from './sessionModal/sessionModal';

const Nav = ({ matches }: { matches: boolean }) => {
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
                        <BoxNav matches={matches}>
                            {matches === true && (
                                <>
                                    <DrawerComponent />
                                </>
                            )}
                            <AccountMenu
                                session={session!}
                                setOpenModal={setOpenModal}
                            />
                        </BoxNav>
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
