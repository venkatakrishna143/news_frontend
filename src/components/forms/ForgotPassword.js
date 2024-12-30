import React from "react";
import { motion } from "framer-motion";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
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
import { useNavigate } from "react-router-dom";
import { NavgationLink } from "./RegisterForm";
import { forgotPassword } from "../../api/Auth";
import TextInput from "../FormComponents/TextInput";

function ForgotPassword() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const defaultValues = {
    email: "",
  };

  const schema = yup.object({
    email: yup.string().required("Email is required").email("Invalid Email Id"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log("Submitted Data:", formData); // Ensure formData is logged correctly

    forgotPassword(formData.email)
      .then((response) => {
        console.log("API Response:", response.data);
        if (response.data.success) {
          navigate("/user/resend-verification");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
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
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        component="form"
        spacing={2}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: isMobile ? "90%" : "40%",
          bgcolor: "background.main",
          borderRadius: 3,
          p: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Forgot Password
        </Typography>

        <TextInput
          label="Email"
          name="email"
          control={control}
          errors={errors}
        />

        <Button variant="contained" fullWidth type="submit">
          Submit
        </Button>

        <NavgationLink to="/user/register">
          Don't have an account? Register Here!
        </NavgationLink>
      </Stack>
    </StyledLoginContainer>
  );
}

export default ForgotPassword;
