import React, { useState } from "react";
// import { News } from "../../theme/Resuable/CardComponents";
import { Card, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomPagination from "./CustomPagination";

function NewsCards() {

  const [newsdata,setnewsdata] = useState([])

  const handleCallback = (data) => {
    // console.log(data)
    setnewsdata(data)
  }

  return (
    <News item component={Card} xs={12} md={5.2}>
      <CustomPagination  />
    </News>
  );
}

export default NewsCards;

const articles = [
  {
    id:1,
    title: "News 1",
    summary: "Summary 1",
    content: "Content 1",
    // image: "/assets/images/news1.jpg",
  },
  {
    id:2,
    title: "News 2",
    summary: "Summary 2",
    content: "Content 2",
    // image: "/assets/images/news2.png",
  },
];

const News = styled(Grid)(({ theme }) => ({
  padding: "10px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection:'column '
}));
