import React, { FC } from 'react';
import {
    Box1,
    Form,
    styles,
    Contents,
    Container,
    ContenedorForm,
} from './styled';
import {
    Box,
    Stack,
    Button,
    Typography,
    CircularProgress,
} from '@mui/material';
import { TLogin } from './types';
import Link from 'next/link';
import CustomerInput from '@/common/input/input';

const ViewLogin: FC<TLogin> = ({
    errors,
    schema,
    control,
    loading,
    handleSubmit,
    handleSubmitLogin,
}) => {
    return (
        <Container>
            <Box1>
                <Contents />
                <Box sx={styles.box2}>
                    <Form onSubmit={handleSubmit(handleSubmitLogin)}>
                        <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                            sx={{ color: 'black' }}
                        >
                            <b>LOGIN</b>
                        </Typography>
                        <Stack spacing={2}>
                            <ContenedorForm>
                                <CustomerInput
                                    label="Email"
                                    name="email"
                                    errors={errors?.email}
                                    control={control}
                                    schema={schema}
                                />
                                <CustomerInput
                                    label="Password"
                                    name="password"
                                    errors={errors?.password}
                                    control={control}
                                    schema={schema}
                                />
                            </ContenedorForm>
                        </Stack>
                        <Box display="flex" flexDirection="column" gap="15px">
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                            >
                                {loading ? (
                                    <CircularProgress
                                        size={15}
                                        color="inherit"
                                    />
                                ) : (
                                    ''
                                )}
                                <b>SIGN IN</b>
                            </Button>
                            <Box display="flex" gap="5px" margin="auto">
                                <b>Do not you have an account?</b>
                                <Link href={'/SignUp'} style={styles.link}>
                                    <b>SIGN UP</b>
                                </Link>
                            </Box>
                        </Box>
                    </Form>
                </Box>
            </Box1>
        </Container>
    );
};

export default ViewLogin;
