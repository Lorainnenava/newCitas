import {
    Card,
    Stack,
    Avatar,
    SvgIcon,
    Typography,
    CardContent,
} from '@mui/material';
import { FC } from 'react';
import { TCards } from './types';

export const Cards: FC<TCards> = ({ data, icon, tittle, colorIcon }) => {
    return (
        <Card
            sx={{
                width: '100%',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                height: '110px',
            }}
        >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Avatar
                        sx={{
                            backgroundColor: colorIcon,
                            height: 70,
                            width: 70,
                        }}
                    >
                        <SvgIcon>{icon}</SvgIcon>
                    </Avatar>
                    <Stack spacing={1}>
                        <Typography variant="h4" color={colorIcon}>
                            <b>{data}</b>
                        </Typography>
                        <Typography color={colorIcon} variant="overline">
                            {tittle}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
