'use client';
import { useEffect, useState } from 'react';
import { ComponentContainer, MainContainer } from './styled';
import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { modulesGetAll } from '../../../redux/features/modules/getAll/request';
import { colors } from '../../../utils/colors/colors';
import BasicDateCalendar from '../../../components/calendar/calendar';
import DoctorAppointmentsChart from '../../../components/grafic/chart';
import SalesChart from '../../../components/grafic/line/line';
import { Cards } from '../../../components/card/card';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { TDataModulesGetAll } from '../../../components/template/layout/types';
import { CardWelcome } from '../../../components/card/cardWelcome/cardWelcome';

function User() {
    const dispatch = useAppDispatch();

    /**
     * useState
     */
    const [data, setData] = useState<Array<any>>();

    /**
     * modulesGetAllSelector
     */
    const modulesGetAllSelector = useAppSelector(
        (state) => state.root.modulesGetAll
    );

    /**
     * useEffect para obtener los modules y subModules
     */
    useEffect(() => {
        if (modulesGetAllSelector.data instanceof Array) {
            setData(
                modulesGetAllSelector.data.map(
                    (x: TDataModulesGetAll, index: number) => {
                        return {
                            index,
                            name: x.name,
                            subModule: x.subModule,
                        };
                    }
                )
            );
        }
    }, [modulesGetAllSelector.data]);

    /**
     * useEffect para llamar a los dispatches
     */
    useEffect(() => {
        dispatch(modulesGetAll());
    }, [dispatch]);

    return (
        <MainContainer>
            {/* <Grid container>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '90vh',
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            marginBottom={3}
                        >
                            <CardWelcome data={'Admin'} />
                        </Grid>
                        <Grid container spacing={2} rowSpacing={0.5}>
                            {[...Array(4)].map((_, i) => (
                                <Grid
                                    key={i}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={3}
                                    xl={3}
                                >
                                    <Cards
                                        tittle="xd"
                                        icon={<AdminPanelSettingsIcon />}
                                        data={'huevis'}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                    <Box
                        sx={{
                            width: '92%',
                            margin: 'auto',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            height: '100%',
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        }}
                    >
                        <BasicDateCalendar />
                        <Box
                            sx={{
                                width: '85%',
                                margin: 'auto',
                                height: '50%',
                            }}
                        >
                            <Divider style={{ margin: '15px 0px' }} />
                            <Typography>Proximas citas</Typography>
                            <Card
                                style={{
                                    width: '100%',
                                    backgroundColor: colors.first,
                                    marginTop: '10px',
                                    display: 'flex',
                                    boxShadow:
                                        'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                }}
                            >
                                <Box
                                    style={{
                                        backgroundColor: '#fc6747',
                                        width: '2%',
                                        height: '100px',
                                    }}
                                />
                                <CardContent
                                    style={{ color: 'white', width: '98%' }}
                                >
                                    <Typography variant="body2">
                                        Lorainne Navarro
                                    </Typography>
                                    <Typography variant="body2">
                                        7: 45 AM
                                    </Typography>
                                    <Typography variant="body2">
                                        Dr. Juliana Galviz
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Grid>
            </Grid> */}
        </MainContainer>
    );
}

export default User;
