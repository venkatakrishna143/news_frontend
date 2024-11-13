import React from "react";
// import { Trending } from "../../theme/Resuable/CardComponents";
import { Card, styled } from "@mui/material";
import Grid from "@mui/material/Grid";


function TrendingNews() {
  return (
    <Trending item component={Card} xs={12} md={3.5}>
      TrendingNews
    </Trending>
  );
}

export default TrendingNews;

const Trending= styled(Grid)(({ theme }) => ({
  padding: "10px",
}));
