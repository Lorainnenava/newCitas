"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { userLogin } from "@/redux/features/login/request";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
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
import { validateRequired } from "../../utils";
import { useRouter } from "next/navigation";
import { SerializedError } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";

const SignIn = () => {
  /**
   * useStates
   */
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.root.userLogin);
  const [loading, setLoading] = useState(false);
  const [required, setRequired] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<TypeAlertT>({
    message: "",
    type: "success",
    active: false,
  });
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

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
      dispatch(userLogin(dataForm));
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: dataForm.email,
          password: dataForm.password,
        });
        if (result?.error) {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
      router.push("/user");

    }
  };

  // useEffect(() => {
  //   if (user?.data) {
  //     if (
  //       user?.data?.user?.role === "Admi" ||
  //       user?.data?.user?.role === "doctor"
  //     ) {
  //       setLoading(false);
  //       router.push("/admin");
  //       localStorage.setItem(
  //         "auth",
  //         JSON.stringify({
  //           email: user?.data?.user?.email,
  //           role: user?.data?.user?.role,
  //           token: user?.data?.token,
  //         })
  //       );
  //     } else {
  //       if (user?.data?.user?.role === "usuario") {
  //         setLoading(false);
  //         router.push("/user");
  //         localStorage.setItem(
  //           "auth",
  //           JSON.stringify({
  //             email: user?.data?.user?.email,
  //             role: user?.data?.user?.role,
  //             token: user?.data?.token,
  //           })
  //         );
  //       }
  //     }
  //     toast(user?.data?.msg, {
  //       autoClose: 1500,
  //       type: "success",
  //       hideProgressBar: false,
  //     });
  //   }
  //   if (user.error !== undefined) {
  //     const errorMessage = (user.error as SerializedError)?.message;
  //     setLoading(false);
  //     toast(errorMessage, {
  //       autoClose: 1500,
  //       type: "error",
  //       hideProgressBar: false,
  //     });
  //   }
  // }, [router, user]);

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
            <Typography
              align="center"
              variant="h5"
              component="h2"
              sx={{ color: "black" }}
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

export default SignIn;
