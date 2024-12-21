import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { VRegister } from "../../api/Auth";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StyledLoginContainer } from "../../pages/auth/Authentication";
import { motion } from "framer-motion";
import LottieAnimations from "../LottieAnimations";
import { AnimationsList } from "../../mock/AnimationsList";
import { Login } from "../../assets/Icons";
import { useDispatch } from "react-redux";
import { encrypedtedDetails } from "../../redux/slices/Auth";

const PasswordAccountVerify = () => {
  const { uid, Eemail } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const MediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const [accountVerified, setAccountVerified] = useState(false);

  useEffect(() => {
    const data = {
      enemail: Eemail, // Stores encrypted email
      euid: uid,
    };

    dispatch(encrypedtedDetails());

    // VRegister(data)
    //   .then((res) => {
    //     // console.log(res);
    //     const statuscode = res.status;
    //     if (statuscode === 200) {
    //       setAccountVerified(true);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [uid, Eemail, navigate]);

  const handleNaviagte = () => {
    navigate("/user/login");
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
        <LottieAnimations
          animationData={
            accountVerified
              ? AnimationsList.verified
              : AnimationsList.notverified
          }
        />

        {accountVerified ? (
          <>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{ width: "90%", fontWeight: "bold" }}
            >
              Your Email is Verified !
            </Typography>
            <Button
              variant="contained"
              onClick={handleNaviagte}
              startIcon={<Login />}
            >
              Login
            </Button>{" "}
          </>
        ) : (
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ width: "90%", fontWeight: "bold" }}
          >
            Something went Wrong ! Please try after Sometime !
          </Typography>
        )}
      </Stack>
    </StyledLoginContainer>
  );
};

export default PasswordAccountVerify;
