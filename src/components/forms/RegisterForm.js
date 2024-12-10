import {
  Button,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useParams } from "react-router-dom";

import usePagination from "@mui/material/usePagination/usePagination";

function RegisterForm() {
  const { mode } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const defaultValues = {
    email: "",
    password: "",
    username: "",
    phoneno: "",
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
    <MainContainer
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

        <Typography variant="body2">Create your account now !</Typography>
      </Stack>
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="left"
        spacing={1.5}
        sx={{ width: "100%" }}
      >
        <TextField fullWidth label="Email" size="small" />
        <TextField fullWidth label="Mobile" size="small" />
        <TextField fullWidth label="Username" size="small" />
        <TextField fullWidth label="Password" size="small" />

        <Button variant="contained" fullWidth type="submit">
          Sign Up
        </Button>
      </Stack>

      <NavgationLink to={"/user/login"}>Have an account ?</NavgationLink>
    </MainContainer>
  );
}

export default RegisterForm;

export const MainContainer = styled(Grid)(({ theme, currentmode }) => ({
  // border: "1px solid Blue",
  height: "95%",
  padding: "10px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexDirection: "column",
  gap: "10px",
  zIndex: currentmode === "login" ? "-1" : 0,
  [theme.breakpoints.between("xs", "md")]: {
    justifyContent: "space-between",
    height: "auto",
    gap: "20px",
  },
}));

export const LoginContainer = styled(Grid)(({ theme, currentmode }) => ({
  // border: "1px solid Blue",
  height: "95%",
  padding: "10px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexDirection: "column",
  gap: "10px",
  zIndex: currentmode === "register" ? "-1" : 0,
  [theme.breakpoints.between("xs", "md")]: {
    justifyContent: "space-between",
    height: "auto",
    gap: "20px",
  },
}));

export const NavgationLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  width: "100%",
  textAlign: "center",
  marginTop: "10px",
}));

export const NavgationLink1 = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  width: "100%",
  textAlign: "right",
  fontFamily: theme.typography.fontFamily,
  // marginTop: "10px",
  // fontWeight:"bold",
  "&:hover": {
    textDecoration: "underline",
    // color:theme.palette.primary.main
  },
}));
