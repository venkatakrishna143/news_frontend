import React from "react";
import { Stack } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LottieAnimations({ animationData }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", height: "auto" }}
    >
      <DotLottieReact
        autoplay
        loop
        src={animationData}
        style={{
          width: "300px",
          height: "300px",
          border: "none",
          overflow: "hidden",
        }}
      />
    </Stack>
  );
}

export default LottieAnimations;
