import React from "react";
import { Stack } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useLocation } from "react-router-dom";

function LottieAnimations({ animationData }) {
  const { pathname } = useLocation();

  const notfound = pathname === "/pagenotfound";
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
          width: notfound ? "100%" : "300px",
          height: notfound ? "500px" : "300px",
          border: "none",
          overflow: "hidden",
        }}
      />
    </Stack>
  );
}

export default LottieAnimations;
