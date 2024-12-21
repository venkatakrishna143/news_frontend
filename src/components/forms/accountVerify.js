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

const AccountVerify = () => {
  const { uid, Eemail } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const MediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const [accountVerified, setAccountVerified] = useState(false);

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  useEffect(() => {
    // const sendDataToBackend = async () => {
    //     try {
    //         const response = await axios.post('https://api.evartalu.com/users/validateregister', {
    //             uid,
    //             Eemail,
    //         });

    //         if (response.status === 200) {
    //             setSuccessModalVisible(true);
    //         } else {
    //             setErrorModalVisible(true);
    //         }
    //     } catch (error) {
    //         setErrorModalVisible(true);
    //         setTimeout(() => {
    //             navigate('/signup');
    //         }, 3000);
    //         console.error('Error sending data to backend:', error);
    //     }
    // };

    // if (uid && Eemail) {
    //     sendDataToBackend();

    // }

    const data = {
      email: Eemail,
      uid:uid
    }

    VRegister(data)
      .then((res) => {
        // console.log(res);
        const statuscode = res.status;
        if (statuscode === 200) {
          setAccountVerified(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid, Eemail, navigate]);

  const handleNaviagte = () => {
    navigate("/user/login");
  };

  return (
    // <div className="signin_bg min-h-screen">
    //   {/* Success Modal */}
    //   {successModalVisible && (
    //     <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
    //       <div className="bg-[#F2AD0D] rounded-[34px] p-8 text-center md:px-[60px] px-[30px] py-[40px]">
    //         <div className="flex justify-center mb-[25px]">
    //           {/* <img src={GIF} alt="Loading animation" className='rounded-[50%] w-[105px] h-[105px]' /> */}
    //         </div>
    //         <h1 className="text-white font-semibold lg:text-[28px] md:text-[20px] ">
    //           Account Successfully created{" "}
    //         </h1>
    //         <p className="text-white text-[16px] font-semibold">Go back to</p>
    //         <button
    //           className="text-white font-bold text-[16px] bg-black rounded-[5px] py-[8px] px-[16px]"
    //           onClick={() => navigate("/Signin")}
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //     </div>
    //   )}
    //   {/* Error Modal */}
    //   {errorModalVisible && (
    //     <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
    //       <div className="bg-[#F2AD0D] rounded-[34px] p-8 text-center md:px-[60px] px-[30px] py-[40px]">
    //         <div className="flex justify-center mb-[25px]">
    //           <img
    //             src={GIF1}
    //             alt="Loading animation"
    //             className="rounded-[50%] w-[105px] h-[105px]"
    //           />
    //         </div>
    //         <h1 className="text-white font-semibold lg:text-[28px] md:text-[20px] ">
    //           Something went wrong{" "}
    //         </h1>
    //         <p className="text-white text-[16px] font-semibold">
    //           Be patient and kindly try after sometime
    //         </p>
    //         <button
    //           className="text-white font-bold text-[16px] bg-black rounded-[5px] py-[8px] px-[16px]"
    //           onClick={() => navigate("/Signup")}
    //         >
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </div>
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

export default AccountVerify;
