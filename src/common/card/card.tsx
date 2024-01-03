import {
    Avatar,
    Card,
    CardContent,
    Stack,
    SvgIcon,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { TCards } from './types';

export const Cards: FC<TCards> = ({ data, icon, tittle }) => {
    return (
        <Card
            sx={{
                width: '100%',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
        >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography color="text.secondary" variant="overline">
                            {tittle}
                        </Typography>
                        <Typography variant="h4">{data}</Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'success.main',
                            height: 56,
                            width: 56,
                        }}
                    >
                        <SvgIcon>{icon}</SvgIcon>
                    </Avatar>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    <Stack alignItems="center" direction="row" spacing={0.5}>
                        <SvgIcon color={'success'} fontSize="small">
                            {<Avatar />}
                        </SvgIcon>
                        <Typography
                            color={'error.main'}
                            variant="body2"
                        ></Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
