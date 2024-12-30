import {
  styled,
  useMediaQuery,
  useTheme,
  Stack,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import {
  LoginContainer,
  MainContainer,
  NavgationLink,
  NavgationLink1,
} from "./RegisterForm";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Password from "../FormComponents/Password";
import { useAuth } from "../../pages/auth/Authenticate";
import ErrorBar from "../SnackBars/ErrorBar";
import SuccessBar from "../SnackBars/SuccessBar";
import TextInput from "../FormComponents/TextInput";

function LoginForm() {
  const { mode, id } = useParams();
  const theme = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();

  const showSuccess = SuccessBar();
  const showError = ErrorBar();

  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const defaultValues = {
    uemail: "",
    upassword: "",
  };

  const schema = yup.object({
    uemail: yup.string().required("Email is Required !").email("Please enter valid Email Id !"),
    upassword: yup.string().required("Password is Required !"),
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data) => {
    // console.log(data);
    login(data)
      .then((res) => {
        console.log(res);
        const success = res.data.success;
        if (success) {
          showSuccess(res.data.message);
          navigate(`/user/username/home`);
        } else {
          showError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LoginContainer
      item
      xs={12}
      md={5.8}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      currentmode={mode}
    >
      {/* {isMobile ? <Stack sx={{ width: "100%" }}>Logo</Stack> : null} */}
      <Stack
        direction="column"
        alignItems={isMobile ? "center" : "flex-start"}
        justifyContent="left"
        spacing={1}
        sx={{ width: "100%", mb: "10px" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Welcome Back !
        </Typography>

        <Typography variant="body2">Log in your account now!</Typography>
      </Stack>
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="left"
        spacing={2}
        sx={{ width: "100%" }}
      >
         <TextInput
        label="Email"
        name="uemail"
        control={control}
        errors={errors}
      />
        <Password label="Password" name="upassword" control={control} errors={errors} />
        <NavgationLink1 to="/user/forgot-password">
          Forgot Password
        </NavgationLink1>

        <Button variant="contained" type="submit" fullWidth>
          Sign In
        </Button>
      </Stack>

      <NavgationLink to={"/user/register"}>
        Dont have an account ? Register Here!
      </NavgationLink>
    </LoginContainer>
  );
}

export default LoginForm;
