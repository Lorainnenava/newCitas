import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Typography, CircularProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Button, Box } from "@mui/material";
import { CssTextField } from "../../styled";
import {
  Box1,
  BoxHeader,
  Container,
  ContenedorForm,
  Form,
  ImagenSignup,
  Inicio,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { TypeAlertT } from "../../common/alert/types";
import { TNewDataUser } from "./types";
import { AlertGeneral } from "../../common/alert";
import { SelectChangeEvent } from "@mui/material/Select";
import { BsHouseFill } from "react-icons/bs";
import { SelectAdapter } from "../../common/FormAdaptar/selectAdapter";
import {
  useGetTypeDocumentQuery,
  usePostUserCreatedMutation,
} from "../../api/Queries/resApi";
import { validateRequired, validateRequiredSelect } from "../../utils";
const SignUp = () => {
  /**
   *Stages
   */
  const navigation = useNavigate();
  const [dataForm, setDataForm] = useState<TNewDataUser>({
    name: "",
    _idtypeOfDocument: "",
    identification: 0,
    mobileNumber: 0,
    email: "",
    password: "",
    role: "usuario",
  });
  const navigate = useNavigate();
  const [required, setRequired] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState<TypeAlertT>({
    message: "",
    type: "success",
    active: false,
  });
  const { data: dataDocument } = useGetTypeDocumentQuery({});

  /**
   * DataSelects
   */
  const dataSelects = {
    dataDocument: dataDocument,
  };
  const [CreateNewUser] = usePostUserCreatedMutation();

  const handleChangue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangueSelect = (
    event: React.ChangeEvent<{ value: unknown }> | SelectChangeEvent<unknown>
  ) => {
    event.preventDefault();
    const { name, value } = event.target as HTMLInputElement;
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  /**
   * handleSubmit
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !dataForm?.name ||
      !dataForm?._idtypeOfDocument ||
      !dataForm?.identification ||
      !dataForm?.mobileNumber ||
      !dataForm?.email ||
      !dataForm?.password
    ) {
      setRequired(true);
      setShowAlert({
        active: true,
        message: "Ha ocurrido una incidencia.",
        type: "danger",
        time: 2000,
      });
    } else {
      setLoading(true);
      CreateNewUser(dataForm);
      setRequired(true);
      navigate("/Login");
    }
  };

  return (
    <Container>
      <Box1>
        <ImagenSignup></ImagenSignup>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "50px",
            backgroundColor: "white",
            borderRadius: "0px 20px 20px 0px",
            alignItems: "center",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <BoxHeader>
              <Inicio>
                <BsHouseFill
                  size={30}
                  cursor="pointer"
                  onClick={() => {
                    navigation("/Login");
                  }}
                />
              </Inicio>
              <Typography
                align="center"
                variant="h6"
                component="h2"
                marginTop="5px"
              >
                <b>SIGN UP</b>
              </Typography>
            </BoxHeader>
            <Stack spacing={2}>
              <ContenedorForm>
                <CssTextField
                  label="Name"
                  name="name"
                  id="outlined-basic"
                  size="small"
                  onChange={handleChangue}
                  colors={validateRequired(!dataForm?.name, required)}
                  border={validateRequired(!dataForm?.name, required)}
                />
                <SelectAdapter
                  label="Tipo de documento"
                  name="_idtypeOfDocument"
                  onChange={handleChangueSelect}
                  options={
                    dataSelects?.dataDocument?.map((x: any) => {
                      return {
                        value: x?._id,
                        label: x?.typeOfDocument,
                      };
                    }) || []
                  }
                  borderColor={validateRequiredSelect(
                    !dataForm?._idtypeOfDocument,
                    required
                  )}
                />
                <CssTextField
                  label="Identification"
                  name="identification"
                  id="outlined-basic"
                  size="small"
                  onChange={handleChangue}
                  colors={validateRequired(!dataForm?.identification, required)}
                  border={validateRequired(!dataForm?.identification, required)}
                />
                <CssTextField
                  label="Mobile Number"
                  name="mobileNumber"
                  type="text"
                  id="outlined-basic"
                  size="small"
                  onChange={(e: any) => {
                    handleChangue(e);
                  }}
                  colors={validateRequired(!dataForm?.mobileNumber, required)}
                  border={validateRequired(!dataForm?.mobileNumber, required)}
                />
                <CssTextField
                  label="Email"
                  name="email"
                  id="outlined-basic"
                  size="small"
                  onChange={handleChangue}
                  colors={validateRequired(!dataForm?.email, required)}
                  border={validateRequired(!dataForm?.email, required)}
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
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={15} color="inherit" /> : ""}
              SIGN UP
            </Button>
          </Form>
        </Box>
        <AlertGeneral setShowAlert={setShowAlert} showAlert={showAlert} />
      </Box1>
    </Container>
  );
};

export default SignUp;
