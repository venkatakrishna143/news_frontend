import React from "react";
import { BodyInnerContainer } from "../App";
import ProfileCards from "../components/Cards/ProfileCards";
import NewsCards from "../components/Cards/NewsCards";
import TrendingNews from "../components/Cards/TrendingNews";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import ResponsivePagination from "../components/Cards/ResponsivePagination";
import CustomPagination from "../components/Cards/CustomPagination";

function LandingPage() {
  const theme = useTheme();
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <BodyInnerContainer container columnGap={2} rowGap={2}>
      <ProfileCards />
      <NewsCards />
      {/* {Mobile ? <ResponsivePagination /> : null} */}

      <TrendingNews />
    </BodyInnerContainer>
  );
}

export default LandingPage;
