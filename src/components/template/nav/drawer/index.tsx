import React from 'react';
import { Layout } from '../../layout';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Drawer } from '@mui/material';
import { colors } from '../../../../utils/colors/colors';

const DrawerComponent = () => {
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
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        onClick={toggleDrawer(anchor, true)}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: 'auto',
                            color: `${colors.first}`,
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
                        onClose={toggleDrawer(anchor, false)}
                        sx={{
                            backgroundColor: 'opacity',
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default DrawerComponent;
