import React from "react";
import { motion } from "framer-motion";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import Grid from "@mui/material/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { NavgationLink, NavgationLink1 } from "./RegisterForm";

function ForgotPassword() {
  const navigate = useNavigate();

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
    <StyledLoginContainer
      direction="row"
      alignItems="center"
      justifyContent="center"
      component={motion.div}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{
        duration: 8, // Time to complete one full cycle of the animation
        repeat: Infinity, // Repeat infinitely
        ease: "linear", // Smooth, continuous animation
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        component="form"
        container
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "30%",
          height: "auto",
          bgcolor: "background.main",
          borderRadius: 3,
          position: "relative",
          p: "20px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Forgot Password
        </Typography>

        <TextField label="Email" fullWidth />

        <Button variant="contained" fullWidth type="submit">
          submit
        </Button>

        <NavgationLink to="/user/register">
          Don't have an account ? Register Here !
        </NavgationLink>
      </Stack>
    </StyledLoginContainer>
  );
}

export default ForgotPassword;
