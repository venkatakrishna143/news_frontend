import {
  Button,
  Stack,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../../components/forms/LoginForm";
import RegisterForm from "../../components/forms/RegisterForm";
import Grid from "@mui/material/Grid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { motion } from "framer-motion";

const AuthenticationPage = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

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
      {/* <Stack
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
      </Stack> */}
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
          borderRadius: 3,
          position: "relative",
        }}
      >
        {isMobile ? null : (
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            component={Grid}
            item
            xs={12}
            md={5.9}
            sx={{
              bgcolor: "primary.main",
              width: "65%",
              height: isMobile ? "auto" : "100%",
              padding: "8px",
              borderRadius: 3,
              color: "background.main",
              // border: "1px solid blue",
              position: "absolute",
              zIndex: 1,
              left: mode === "register" ? "0" : null,

              right: mode === "login" ? "0" : null,
              transition: " all 0.5s ease",
            }}
          >
            <Typography
              variant={isMobile ? "body1" : "h6"}
              sx={{ fontWeight: "bold", width: "auto" }}
            >
              Official News
            </Typography>

            {mode === "login" ? (
              <Stack   direction="column"
              alignItems="center"
              justifyContent="center"
                spacing={2}>
                <Typography
                  variant={isMobile ? "body2" : "h6"}
                  sx={{ fontWeight: "normal", textAlign: "center" }}
                >
                  Stay Informed with E-Vartalu !
                </Typography>
                <Typography
                variant={isMobile ? "body2" : "body1"}
                sx={{ fontWeight: "normal", textAlign: "center" }}
              >
                Explore news, trends, and updates
                all in one place. Join us now and connect with a community where
                knowledge meets innovation!
              </Typography>
                </Stack>
            ) : (
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Typography
                  variant={isMobile ? "body2" : "h6"}
                  sx={{ fontWeight: "normal", textAlign: "center" }}
                >
                  Welcome back to E-Vartalu !
                </Typography>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  sx={{ fontWeight: "normal", textAlign: "center" }}
                >
                  Log in to explore the latest news, trends, and updates. Stay
                  connected and informed with your favorite platform!
                </Typography>
              </Stack>
            )}

            {mode === "login" ? (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleRegisterNavigate}
              >
                Sign up
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleLoginNavigate}
              >
                Sign in
              </Button>
            )}
          </Stack>
        )}
        {/* {mode === "register" ? <RegisterForm /> : <LoginForm />} */}

        {/* {isMobile ? null : mode === "login" ? (
          <LoginForm />
        ) : (
          <Stack component={Grid} item xs={12} md={5.8}>
            Text
          </Stack>
        )} */}

        {/* <LoginForm /> */}
        <LoginForm />
        <RegisterForm />
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
