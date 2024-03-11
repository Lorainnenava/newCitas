import React, { FC } from 'react';
import Image from 'next/image';
import { TInfoCard } from './types';
import { colors } from '../../utils/colors/colors';
import { Box, Card, CardContent, Typography } from '@mui/material';

const InfoCard: FC<TInfoCard> = ({ name, specialty, icon }) => {
    return (
        <>
            <Card
                style={{
                    width: '100%',
                    backgroundColor: colors.first,
                    marginTop: '10px',
                    display: 'flex',
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                    height: '70px',
                }}
            >
                <Box
                    style={{
                        width: '40%',
                        height: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '5px',
                        borderRight: '1px solid gray',
                    }}
                >
                    <Image
                        src={icon}
                        alt="medicinaGeneral"
                        width={60}
                        height={60}
                        unoptimized
                    />
                </Box>
                <CardContent style={{ color: 'white', width: '98%' }}>
                    <Typography variant="body2">{name}</Typography>
                    <Typography variant="body2">{specialty}</Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default InfoCard;
