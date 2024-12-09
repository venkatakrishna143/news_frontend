import React from 'react'
import { StyledLoginContainer } from '../../pages/auth/Authentication'
import { motion } from 'framer-motion'
import Grid from "@mui/material/Grid";
import { Stack } from '@mui/material';


function ResetPassword() {
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
          width: "auto",
          height: "auto",
          bgcolor: "background.main",
          borderRadius: 3,
          position: "relative",p:"10px"
        }}
      >
        Reset Password
      </Stack>
  </StyledLoginContainer>
  )
}

export default ResetPassword