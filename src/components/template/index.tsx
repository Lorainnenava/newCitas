'use client';

import React from 'react';
import Nav from './nav';
import { Layout } from './layout';
import { colors } from '../../utils/colors/colors';
import MinLayout from './layout/minLayout/minLayout';
import { Grid, useMediaQuery, useTheme } from '@mui/material';

const NewTemplate = ({ children }: { children: React.ReactNode }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container>
            {isSmallScreen ? (
                <Grid item xs={2}>
                    <MinLayout />
                </Grid>
            ) : (
                <Grid item xs={5} sm={4} md={3} lg={3} xl={2}>
                    <Layout />
                </Grid>
            )}
            <Grid container xs={10} sm={8} md={9} lg={9} xl={10}>
                <Grid
                    item
                    xs={12}
                    style={{
                        height: '6%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Nav matches={isSmallScreen} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{ backgroundColor: colors.third, height: '94%' }}
                >
                    {children}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewTemplate;
