import React from 'react';
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
} from '@mui/material';
import { ContainerImage } from '../styled';
import { colors } from '../../colors/colors';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // icono 1
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // icono 2
import ReceiptIcon from '@mui/icons-material/Receipt'; // icono 3
import FeedIcon from '@mui/icons-material/Feed'; // icono 4
import HistoryIcon from '@mui/icons-material/History'; // icono 5
import GroupIcon from '@mui/icons-material/Group'; // icono 6
import PersonIcon from '@mui/icons-material/Person'; // icono 7
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda'; // icono 8

const MinLayout = () => {
    /**
     * array de iconos
     */
    const iconArray = [
        <AdminPanelSettingsIcon />,
        <CalendarMonthIcon />,
        <ReceiptIcon />,
        <FeedIcon />,
        <HistoryIcon />,
        <GroupIcon />,
        <PersonIcon />,
        <ViewAgendaIcon />,
    ];
    return (
        <Grid
            container
            sx={{
                height: '100vh',
            }}
        >
            <Grid
                item
                xs={12}
                sx={{
                    backgroundColor: `${colors.first}`,
                }}
            >
                <ContainerImage>
                    <Box
                        style={{
                            height: 50,
                        }}
                    />
                </ContainerImage>
                {iconArray.map((icon, index: number) => (
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            height: 44,
                        }}
                        aria-label="contacts"
                        key={index}
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon
                                    style={{
                                        color: 'white',
                                        margin: 'auto',
                                    }}
                                >
                                    {icon}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))}
            </Grid>
        </Grid>
    );
};

export default MinLayout;
