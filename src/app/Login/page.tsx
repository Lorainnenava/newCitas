"use client"
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Box1, Container, ContenedorForm, Contents, Form } from "./styled";
import {
  Box,
  Link,
  Stack,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { CssTextField } from "../../utils/styles";
import { TypeAlertT } from "../../common/alert/types";
import { AlertGeneral } from "../../common/alert/alert";
import { useGetUserCheckedMutation } from "../../redux/service/resApi";
import { validateRequired } from "../../utils";
import { toast } from "react-toastify";
import { SerializedError } from "@reduxjs/toolkit";
import AuthContext from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const { login } = useContext(AuthContext);
  /**
   * useStates
   */
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<TypeAlertT>({
    message: "",
    type: "success",
    active: false,
  });
  const [User, { data: dateUser, isError, error, status }] =
    useGetUserCheckedMutation();

  /**
   * handleChangue
   */
  const handleChangue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * handleSubmit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!dataForm?.email || !dataForm?.password) {
      setRequired(true);
      setShowAlert({
        active: true,
        message: "Ha ocurrido una incidencia.",
        type: "danger",
        time: 2000,
      });
    } else {
      setLoading(true);
      User(dataForm);
      setRequired(false);
    }
  };

  useEffect(() => {
    if (dateUser) {
      if (
        dateUser?.user?.role === "Admi" ||
        dateUser?.user?.role === "doctor"
      ) {
        setLoading(false);
        login(dateUser);
        router.push("/Inicio");
      } else {
        if (dateUser?.user?.role === "usuario") {
          setLoading(false);
          login(dateUser);
          router.push("/Inicio");
        }
      }
      toast(dateUser?.msg, {
        autoClose: 1500,
        type: "success",
        hideProgressBar: false,
      });
    }
    if (isError) {
      const errorMessage = (error as SerializedError)?.message;
      setLoading(false);
      toast(errorMessage, {
        autoClose: 1500,
        type: "error",
        hideProgressBar: false,
      });
    }
  }, [dateUser, error, router, isError, status, login]);

  return (
    <Container>
      <Box1>
        <Contents />
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0px 20px 20px 0px",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <Typography align="center" variant="h5" component="h2" sx={{color:"black"}}>
              <b>LOGIN</b>
            </Typography>
            <Stack spacing={2}>
              <ContenedorForm>
                <CssTextField
                  label="Email"
                  name="email"
                  id="outlined-basic"
                  size="small"
                  colors={validateRequired(!dataForm?.email, required)}
                  border={validateRequired(!dataForm?.email, required)}
                  onChange={handleChangue}
                />
                <CssTextField
                  label="Password"
                  name="password"
                  id="outlined-basic"
                  size="small"
                  onChange={handleChangue}
                  colors={validateRequired(!dataForm?.password, required)}
                  border={validateRequired(!dataForm?.password, required)}
                />
              </ContenedorForm>
            </Stack>
            <Box display="flex" flexDirection="column" gap="15px">
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? <CircularProgress size={15} color="inherit" /> : ""}
                <b>SIGN IN</b>
              </Button>
              <Box display="flex" gap="5px" margin="auto">
                <b>Don’t you have an account?</b>
                <Link
                  onClick={() => router.push("/SignUp")}
                  sx={{
                    color: "#ce0a31",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <b>SIGN UP</b>
                </Link>
              </Box>
            </Box>
          </Form>
        </Box>
        <AlertGeneral setShowAlert={setShowAlert} showAlert={showAlert} />
      </Box1>
    </Container>
  );
};

export default Login;
