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
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth/Authenticate";

function LandingPage() {
  const theme = useTheme();
  const {isAuthenticated} = useAuth()
  const { newsdata, pagedata, limitdata } = useSelector((state) => state.news);
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  if (!newsdata) {
    return <Navigate to="/pagenotfound" replace />;
  }

  return (
    <BodyInnerContainer container columnGap={1} rowGap={1}>
      <LeftCardsSection item xs={12} md={3}>
        {isAuthenticated ? <ProfileCards /> : null}
        <JobCard />
      </LeftCardsSection>

      <NewsCards />
      {/* {Mobile ? <ResponsivePagination /> : null} */}

      <RightCardSection item xs={12} md={3} sx={{ px: "6px" }}>
        {/* <TrendingNews /> */}
        <WeatherCard />
      </RightCardSection>
    </BodyInnerContainer>
  );
}

export default LandingPage;

const LeftCardsSection = styled(Grid)(({ theme }) => ({
  position: "fixed",
  left: "5%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  gap: "8px",
  flexShrink: 0,
  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    left: 0,
  },
}));

const RightCardSection = styled(Grid)(({ theme }) => ({
  position: "fixed",
  right: "5%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  gap: "8px",
  flexShrink: 0,
  [theme.breakpoints.between("xs", "md")]: {
    position: "relative",
    right: 0,
  },
}));
