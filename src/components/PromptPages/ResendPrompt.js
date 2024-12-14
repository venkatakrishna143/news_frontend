import React from "react";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import { motion } from "framer-motion";
import { Card, Stack, useMediaQuery, useTheme } from "@mui/material";

function ResendPrompt() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

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
        component={Card}
        sx={{
          width: isMobile ? "90%" : "50%",
          height: "auto",
          bgcolor: "background.main",
          padding: "20px",
        }}
      >
        ResendPrompt
      </Stack>
    </StyledLoginContainer>
  );
}

export default ResendPrompt;
