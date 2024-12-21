import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LottieAnimations from "../LottieAnimations";
import { AnimationsList } from "../../mock/AnimationsList";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import { motion } from "framer-motion";

function ResendPrompt() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const MediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
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
        spacing={2}
        sx={{
          width: isMobile ? "90%" : MediumScreen ? "65%" : "45%",
          height: "auto",
          bgcolor: "background.main",
          textAlign: "center",
          p: "16px",
          borderRadius: 2,
        }}
      >
        <LottieAnimations animationData={AnimationsList.emailsent} />

        <Typography variant="body1" sx={{ width: "90%" }}>
          Please check your inbox and click the verify button to confirm your
          Email address!
        </Typography>

        <Button variant="contained">Resend Email !</Button>
      </Stack>
    </StyledLoginContainer>
  );
}

export default ResendPrompt;
