import { Box } from '@mui/material';
import React, { FC } from 'react';
import img from '../../../public/assets/img/main/imgMain.jpg';

const PrincipalView: FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                margin: '0px',
                backgroundImage: ` url(${img.src})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        ></Box>
    );
};

export default PrincipalView;
