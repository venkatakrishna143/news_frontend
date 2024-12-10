import {
  styled,
  useMediaQuery,
  useTheme,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import {
  LoginContainer,
  MainContainer,
  NavgationLink,
  NavgationLink1,
} from "./RegisterForm";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginForm() {
  const { mode } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const defaultValues = {
    email: "",
    password: "",
  };

  const schema = yup.object({
    search: yup.string().required("Search field is required"),
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
      {isMobile ? <Stack sx={{ width: "100%" }}>Logo</Stack> : null}
      <Stack
        direction="column"
        alignItems={isMobile ? "center" : "flex-start"}
        justifyContent="left"
        spacing={1}
        sx={{ width: "100%" }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Get Started
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
        <TextField fullWidth label="Email" size="small" />
        <TextField fullWidth label="Password" size="small" />
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
