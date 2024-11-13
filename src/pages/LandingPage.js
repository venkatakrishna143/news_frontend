import React from "react";
import { BodyInnerContainer } from "../App";
import ProfileCards from "../components/Cards/ProfileCards";
import NewsCards from "../components/Cards/NewsCards";
import TrendingNews from "../components/Cards/TrendingNews";
import { useMediaQuery, useTheme } from "@mui/material";

function LandingPage() {
  const theme = useTheme();
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <BodyInnerContainer container columnGap={2} rowGap={2}>
   {Mobile ? null :    <ProfileCards />}
      <NewsCards />
      <TrendingNews />
    </BodyInnerContainer>
  );
}

export default LandingPage;
