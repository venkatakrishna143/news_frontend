import React from "react";
import { BodyInnerContainer } from "../App";
import ProfileCards from "../components/Cards/ProfileCards";
import NewsCards from "../components/Cards/NewsCards";
import TrendingNews from "../components/Cards/TrendingNews";
import { Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import ResponsivePagination from "../components/Cards/ResponsivePagination";
import CustomPagination from "../components/Cards/CustomPagination";
import Grid from "@mui/material/Grid";
import JobCard from "../components/Cards/JobCard";
import WeatherCard from "../components/Cards/WeatherCard";

function LandingPage() {
  const theme = useTheme();
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <BodyInnerContainer container columnGap={2} rowGap={2}>
      <LeftCardsSection item xs={12} md={3}>
        <ProfileCards />
        <JobCard />
      </LeftCardsSection>

      <NewsCards />
      {/* {Mobile ? <ResponsivePagination /> : null} */}

      <RightCardSection item xs={12} md={3} sx={{ px: "6px" }}>
        <TrendingNews />
        <WeatherCard />
      </RightCardSection>
    </BodyInnerContainer>
  );
}

export default LandingPage;

const LeftCardsSection = styled(Grid)(({ theme }) => ({
  // padding: "10px",
  position: "fixed",
  left: "5%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  gap: "8px",
  // border: "1px solid blue",
  // height: "200px",
  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    left: 0,
  },
}));

const RightCardSection = styled(Grid)(({ theme }) => ({
  // padding: "10px",
  position: "fixed",
  right: "5%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  gap: "8px",
  // border: "1px solid blue",
  // height: "200px",
  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    right: 0,
  },
}));
