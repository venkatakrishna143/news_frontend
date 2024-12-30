import {
  Button,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm, {
  LoginContainer,
  MainContainer,
} from "../../components/forms/RegisterForm";
import { Player } from "lottie-react";

import Grid from "@mui/material/Grid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";
import { AnimationsList } from "../../mock/AnimationsList";
import LottieAnimations from "../../components/LottieAnimations";

const AuthenticationPage = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const MediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const condition = pathname === "/user/register";
  const { mode } = useParams(); // Get the current mode ('login' or 'register')
  const [currentMode, setCurrentMode] = useState(mode || "login");

  const Navigate = useNavigate();
  // isMobile
  const toggleMode = () => {
    setCurrentMode((prev) => (prev === "login" ? "register" : "login"));
  };

  const slideVariants = {
    initial: { x: currentMode === "login" ? "-100%" : "100%", opacity: 0 },
    animate: { x: "0%", opacity: 1 },
    exit: { x: currentMode === "login" ? "100%" : "-100%", opacity: 0 },
  };

  const handleRegisterNavigate = () => {
    Navigate("/user/register");
  };

  const handleLoginNavigate = () => {
    Navigate("/user/login");
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
        direction="row"
        alignItems="center"
        justifyContent="center"
        component={Grid}
        container
        spacing={1}
        sx={{
          width: isMobile ? "90%" : MediumScreen ? "75%" : "65%",
          height: isMobile ? "auto" : "95%",
          bgcolor: "background.main",
          borderRadius: 3,
          position: "relative",
        }}
      >
      
        {mode === "login" ? (
          <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
            {isMobile ? null : (
              <Grid
                item
                xs={12}
                md={5.95}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <LottieAnimations animationData={AnimationsList.login} />

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "normal",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  Log in to explore the latest news, trends, and updates. Stay
                  connected and informed with your favorite platform!
                </Typography>
              </Grid>
            )}

            <LoginForm />
          </Stack>
        ) : null}

        {mode === "register" ? (
          <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
            {isMobile ? null : (
              <Grid
                item
                xs={12}
                md={5.95}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <LottieAnimations animationData={AnimationsList.register} />

                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "normal",
                    textAlign: "center",
                    width: "80%",
                  }}
                >
                  Explore news, trends, and updates all in one place. Join us
                  now and connect with a community where knowledge meets
                  innovation!
                </Typography>
              </Grid>
            )}

            <RegisterForm />
          </Stack>
        ) : null}
      </Stack>
    </StyledLoginContainer>
  );
};

export default AuthenticationPage;

export const StyledLoginContainer = styled(Stack)(({ theme }) => ({
  width: "100%",
  position: "relative",
  height: "100vh", // Ensure it takes the full viewport height
  // background:
  //   "linear-gradient(90deg,  rgba(25,22,69,1) 48%, rgba(67,198,172,1) 87%)",

  background:
    "radial-gradient(circle, rgba(25,22,69,1) 20%, rgba(67,198,172,1) 60%)",

  backgroundSize: "400% 400%",

  // [theme.breakpoints.between("xs", "md")]: {
  //   height:"auto"
  // }
}));
