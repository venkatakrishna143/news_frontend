import React from "react";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import { motion, useScroll } from "framer-motion";
import Grid from "@mui/material/Grid";
import {
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { resetPassword } from "../../api/Auth";
import Password from "../FormComponents/Password";
import { useNavigate } from "react-router-dom";
import SuccessBar from "../SnackBars/SuccessBar";
import ErrorBar from "../SnackBars/ErrorBar";

function ResetPassword() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const Navigate = useNavigate();

  const { enemail, euid } = useSelector((state) => state.auth.encrypted);

  const defaultValues = {
    password: "",
    cpassword: "",
  };

  const schema = yup.object({
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters long, include at least one uppercase letter, and one special character."
      )
      .required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const showSuccess = SuccessBar();
  const showError = ErrorBar();

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
    let apidata = {
      uemail: enemail,
      uid: euid,
      npassword: data.cpassword,
    };

    // console.log(apidata);
    resetPassword(apidata)
      .then((res) => {
        // console.log(res);
        const success = res.data.success;
        if (success) {
          showSuccess(res.data.message);
          Navigate("/user/login");
        } else {
          showError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          width: isMobile ? "90%" : "40%",
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
        <Password label="New Password" name="password" control={control} />

        <Password
          label="Confirm New Password"
          name="cpassword"
          control={control}
        />

        <Button variant="contained" fullWidth type="submit">
          Reset Password
        </Button>
      </Stack>
    </StyledLoginContainer>
  );
}

export default ResetPassword;
