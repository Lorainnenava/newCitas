'use client';
import { Cards } from '../../../components/card';
import PeopleIcon from '@mui/icons-material/People';
import { BoxDashboard, MainContainer } from './styled';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import AppointmentCard from '../../../components/infoCard';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import BasicDateCalendar from '../../../components/calendar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, Divider, Grid, Typography } from '@mui/material';
import TableComponent from '../../../components/appointmentTable';
import { CardWelcome } from '../../../components/card/cardWelcome';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import Odontologia from '../../../../public/assets/img/specialties/diente.png';
import Nutricion from '../../../../public/assets/img/specialties/nutricion.png';
import MedicinaGeneral from '../../../../public/assets/img/specialties/medicina.png';

function User() {
    /**
     * Array de cartas
     */
    const dataCards = [
        {
            tittle: 'Pacientes',
            icon: <PeopleIcon />,
            data: '5',
            colorIcon: '#ff8800',
        },
        {
            tittle: 'Doctores',
            icon: <Diversity1Icon />,
            data: '20',
            colorIcon: '#991d5d',
        },
        {
            tittle: 'Citas completadas',
            icon: <EventAvailableIcon />,
            data: '200',
            colorIcon: '#c8cd3b',
        },
        {
            tittle: 'Citas canceladas',
            icon: <EventBusyIcon />,
            data: '50',
            colorIcon: '#1693a7',
        },
    ];

    return (
        <MainContainer>
            <Grid container>
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
                            marginBottom={2}
                        >
                            <CardWelcome data={'Admin'} />
                        </Grid>
                        <Grid container spacing={2} rowSpacing={0.5}>
                            {[...dataCards].map((x, i) => (
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
                                        tittle={x.tittle}
                                        icon={x.icon}
                                        data={x.data}
                                        colorIcon={x.colorIcon}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            marginTop={2}
                        >
                            <TableComponent />
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    display={'flex'}
                    justifyContent={'flex-end'}
                >
                    <BoxDashboard>
                        <BasicDateCalendar />
                        <Box
                            sx={{
                                width: '85%',
                                margin: 'auto',
                                height: '60%',
                            }}
                        >
                            <Divider style={{ margin: '15px 0px' }} />{' '}
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <EmojiEventsIcon color="warning" />
                                <Typography>Top doctors</Typography>
                            </Box>
                            <AppointmentCard
                                name="Lorainne Navarro"
                                specialty="odontologia"
                                icon={Odontologia}
                            />
                            <AppointmentCard
                                name="Lorainne Navarro"
                                specialty="nutricion"
                                icon={Nutricion}
                            />
                            <AppointmentCard
                                name="Lorainne Navarro"
                                specialty="consulta general"
                                icon={MedicinaGeneral}
                            />
                            <AppointmentCard
                                name="Lorainne Navarro"
                                specialty="consulta general"
                                icon={Odontologia}
                            />
                            <AppointmentCard
                                name="Lorainne Navarro"
                                specialty="consulta general"
                                icon={Nutricion}
                            />
                        </Box>
                    </BoxDashboard>
                </Grid>
            </Grid>
        </MainContainer>
    );
}

export default User;
