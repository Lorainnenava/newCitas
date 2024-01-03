'use client';

import * as React from 'react';
import Nav from '../Nav';
import { Layout } from '../layout';
import {
    Box,
    Grid,
    Button,
    Drawer,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../colors/colors';
import MenuIcon from '@mui/icons-material/Menu';
import MinLayout from '../layout/minLayout/minLayout';

export default function TemporaryDrawer({
    children,
}: {
    children: React.ReactNode;
}) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(750));
    const [active, setActive] = React.useState(false);
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer =
        (anchor: 'left', open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: 'left') => (
        <Box
            sx={{
                width: 250,
                backgroundColor: `${colors.first}`,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Layout />
        </Box>
    );

    return (
        <>
            {matches ? (
                <Grid container style={{ height: '100vh' }}>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {(['left'] as const).map((anchor) => (
                                <Grid
                                    item
                                    style={{
                                        backgroundColor: `${colors.first}`,
                                        height: '100vh',
                                        margin: 'auto',
                                        width: 'auto',
                                    }}
                                >
                                    <React.Fragment key={anchor}>
                                        <Button
                                            onClick={toggleDrawer(anchor, true)}
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                width: 'auto',
                                                color: 'white',
                                            }}
                                        >
                                            <MenuIcon
                                                sx={{
                                                    fontSize: '1rm',
                                                }}
                                            />
                                        </Button>
                                        <Drawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(
                                                anchor,
                                                false
                                            )}
                                            sx={{ backgroundColor: 'opacity' }}
                                        >
                                            {list(anchor)}
                                        </Drawer>
                                    </React.Fragment>
                                </Grid>
                            ))}
                        </motion.div>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                        <Grid container direction="column">
                            <Nav
                                matches={matches}
                                setActive={setActive}
                                active={active}
                            />
                            <Grid
                                item
                                style={{
                                    backgroundColor: `${colors.third}`,
                                    padding: '10px',
                                    height: '94.5vh',
                                }}
                            >
                                {children}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    style={{
                        width: 'auto',
                    }}
                >
                    <Grid
                        item
                        sm={active ? 1 : 3}
                        md={active ? 1 : 3}
                        lg={active ? 1 : 2}
                        xl={active ? 1 : 2}
                    >
                        {active ? <MinLayout /> : <Layout />}
                    </Grid>
                    <Grid
                        item
                        sm={active ? 11 : 9}
                        md={active ? 11 : 9}
                        lg={active ? 11 : 10}
                        xl={active ? 11 : 10}
                    >
                        <Nav
                            matches={matches}
                            setActive={setActive}
                            active={active}
                        />
                        <Grid
                            item
                            style={{
                                backgroundColor: `${colors.third}`,
                                padding: '10px',
                                height: '92vh',
                            }}
                        >
                            {children}
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    );
}
