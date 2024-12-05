import { Stack, styled } from "@mui/material";
import React from "react";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

const AuthenticationPage = () => {
  const { pathname } = useLocation();

  const condition = pathname === "/user/register";

  return (
    <StyledLoginContainer
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "40%",
          position: "absolute",
          height: "90%",
          bgcolor: "background.main",
          left: condition ? "50%" : "130px",
          borderRadius: 2,
          transition: "all 0.5s ease",
          // left:"50%"
        }}
      >
        Text
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        component={Grid}
        container
        spacing={1}
        sx={{
          width: "65%",
          height: "80%",
          bgcolor: "background.main",
        }}
      >
        <RegisterForm />
        <LoginForm />
      </Stack>
    </StyledLoginContainer>
  );
};

export default AuthenticationPage;

const StyledLoginContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  position: "relative",
  height: "100vh", // Ensure it takes the full viewport height
  background:
    "linear-gradient(90deg, rgba(67,198,172,1) 26%, rgba(25,22,69,1) 48%, rgba(67,198,172,1) 87%)",
}));
