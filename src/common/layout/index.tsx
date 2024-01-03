'use client';

import React, { FC, useEffect, useState } from 'react';
import {
    Grid,
    Accordion,
    Typography,
    AccordionDetails,
    AccordionSummary,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { colors } from '../colors/colors';
import { useRouter } from 'next/navigation';
import { Box, ContainerImage, style } from './styled';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import { SubModuleType, TDataModulesGetAll } from './types';
import logoNav from '../../../public/assets/img/generic/logo.png';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { modulesGetAll } from '../../redux/features/modules/getAll/request';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // icono 1
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // icono 2
import ReceiptIcon from '@mui/icons-material/Receipt'; // icono 3
import FeedIcon from '@mui/icons-material/Feed'; // icono 4
import HistoryIcon from '@mui/icons-material/History'; // icono 5
import GroupIcon from '@mui/icons-material/Group'; // icono 6
import PersonIcon from '@mui/icons-material/Person'; // icono 7
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda'; // icono 8
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const Layout: FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

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

    /**
     * useState
     */
    const [data, setData] = useState<Array<TDataModulesGetAll>>();

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
        <>
            <Grid container sx={style.gridLayout}>
                <Grid item xs={12} sx={{ backgroundColor: `${colors.first}` }}>
                    <ContainerImage>
                        <Image
                            src={logoNav}
                            alt="logo"
                            width={80}
                            height={50}
                            style={style.imagen}
                            onClick={() => {
                                router.push('/Dashboard');
                            }}
                        />
                    </ContainerImage>
                    {modulesGetAllSelector &&
                        data &&
                        data?.length > 0 &&
                        data.map((x: TDataModulesGetAll) => {
                            return (
                                <Box key={x.index} style={style.Box}>
                                    <Accordion sx={style.Accordion}>
                                        <AccordionSummary
                                            expandIcon={
                                                <GridExpandMoreIcon
                                                    sx={{ color: 'white' }}
                                                />
                                            }
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                            sx={style.AccordionSummary}
                                            onClick={(event: any) => {
                                                event.stopPropagation();
                                            }}
                                            onKeyDown={(event: any) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <Box style={style.typographyModule}>
                                                {iconArray[x.index]}
                                                <Typography
                                                    sx={{
                                                        fontSize: '13px',
                                                    }}
                                                >
                                                    {x.name}
                                                </Typography>
                                            </Box>
                                        </AccordionSummary>
                                        {x.subModule.map(
                                            (
                                                subModule: SubModuleType,
                                                subIndex: number
                                            ) => (
                                                <Link
                                                    key={subIndex}
                                                    href={subModule.path}
                                                    style={{
                                                        textDecoration: 'none',
                                                        color: 'white',
                                                    }}
                                                >
                                                    <AccordionDetails>
                                                        <Box
                                                            style={{
                                                                display: 'flex',
                                                            }}
                                                        >
                                                            <ArrowRightIcon />
                                                            <Typography
                                                                sx={
                                                                    style.typographySubModule
                                                                }
                                                            >
                                                                {subModule.name}
                                                            </Typography>
                                                        </Box>
                                                    </AccordionDetails>
                                                </Link>
                                            )
                                        )}
                                    </Accordion>
                                </Box>
                            );
                        })}
                </Grid>
            </Grid>
        </>
    );
};
