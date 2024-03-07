'use client';

import React from 'react';
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
} from '@mui/material';
import { ContainerImage } from '../styled';
import { iconArray } from '../../../../utils/iconLayout';
import { colors } from '../../../../utils/colors/colors';


const MinLayout = () => {
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
