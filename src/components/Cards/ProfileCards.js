import { Box, Card, styled } from "@mui/material";
import React from "react";

function ProfileCards() {
  return <MainCardContainer >ProfileCards</MainCardContainer>;
}

export default ProfileCards;

export const MainCardContainer = styled(Card)(({theme }) => ({
  width: '100%',
  display: 'flex',
  height:"auto",
  alignItems: 'flex-start',
  justifyContent: "start",
  flexDirection: 'column',
  gap: "8px",
  padding: "8px",
  // height:"100px"
}))

export const WeatherCardContainer = styled(Box)(({theme }) => ({
  width: '100%',
  display: 'flex',
  height:"auto",
  alignItems: 'flex-start',
  justifyContent: "start",
  flexDirection: 'column',
  gap: "8px",
  padding: "8px",
  // height:"100px"
}))
