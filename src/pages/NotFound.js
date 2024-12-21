import { width } from "@mui/system";
import React from "react";
import LottieAnimations from "../components/LottieAnimations";
import { AnimationsList } from "../mock/AnimationsList";
import { Button, Stack } from "@mui/material";

function NotFound() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{ width: "500px", height: "500px" }}
    >
      <LottieAnimations animationData={AnimationsList.notfound} />

      <Button href="/home" variant="contained">Home</Button>
    </Stack>
  );
}

export default NotFound;
