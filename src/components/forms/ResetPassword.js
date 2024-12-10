import React from "react";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import { Button, Stack, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function ResetPassword() {
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
        onSubmit={handleSubmit(onSubmit)}
        container
        spacing={2}
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
          Reset Password
        </Typography>
        <TextField label="New Password" fullWidth />

        <TextField label="Confirm New Password" fullWidth />

        <Button variant="contained" fullWidth type="submit">
          Reset Password
        </Button>
      </Stack>
    </StyledLoginContainer>
  );
}

export default ResetPassword;
