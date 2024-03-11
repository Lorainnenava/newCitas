import { FC } from 'react';
import Image from 'next/image';
import { TCardWelcome } from '../types';
import { colors } from '../../../utils/colors/colors';
import { Box, Container, Typography } from '@mui/material';
import Doctor from '../../../../public/assets/img/xd/7.png';

export const CardWelcome: FC<TCardWelcome> = ({ data }) => {
    return (
        <Container
            style={{
                display: 'flex',
                backgroundColor: 'white',
                height: '280px',
                borderRadius: '8px',
                width: '100%',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
        >
            <Box
                sx={{
                    width: '60%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        width: '97%',
                        color: `${colors.first}`,
                    }}
                >
                    <Typography sx={{ fontSize: '40px', color: '#1b325f' }}>
                        <b>{`Bienvenido, ${data} !`}</b>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        width: '96%',
                        color: `${colors.first}`,
                    }}
                >
                    <Typography>
                        Le deseamos un lindo día y no olvides que tu salud
                        simpre es lo más importante!
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '40%',
                    display: 'flex',
                    alignItems: 'end',
                    justifyContent: 'flex-end',
                }}
            >
                <Image src={Doctor} alt="logo" width={450} height={260} />
            </Box>
        </Container>
    );
};
