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
import { CssTextField } from '../../utils/styles';
import { AlertGeneral } from '../../common/alert/alert';
import { validateRequired } from '../../utils';
import { TLogin } from './types';
import Link from 'next/link';

const ViewLogin: FC<TLogin> = ({
    loading,
    dataForm,
    required,
    showAlert,
    setShowAlert,
    handleSubmit,
    handleChangue,
}) => {

    return (
        <Container>
            <Box1>
                <Contents />
                <Box sx={styles.box2}>
                    <Form onSubmit={handleSubmit}>
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
                                <CssTextField
                                    label="Email"
                                    name="email"
                                    id="outlined-basic"
                                    size="small"
                                    onChange={handleChangue}
                                    colors={validateRequired(
                                        !dataForm?.email,
                                        required
                                    )}
                                    border={validateRequired(
                                        !dataForm?.email,
                                        required
                                    )}
                                />
                                <CssTextField
                                    label="Password"
                                    name="password"
                                    id="outlined-basic"
                                    size="small"
                                    onChange={handleChangue}
                                    colors={validateRequired(
                                        !dataForm?.password,
                                        required
                                    )}
                                    border={validateRequired(
                                        !dataForm?.password,
                                        required
                                    )}
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
                                <b>Don’t you have an account?</b>
                                <Link href={'/SignUp'} style={styles.link}>
                                    <b>SIGN UP</b>
                                </Link>
                            </Box>
                        </Box>
                    </Form>
                </Box>
                <AlertGeneral
                    setShowAlert={setShowAlert}
                    showAlert={showAlert}
                />
            </Box1>
        </Container>
    );
};

export default ViewLogin;
