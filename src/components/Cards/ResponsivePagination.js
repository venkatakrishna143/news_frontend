import { Button, Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { getNews, getnewsCategories } from "../../api/News";
import { useDispatch, useSelector } from "react-redux";
import { appendNewsData, PageData } from "../../redux/slices/News";
import { resetAppState } from "../../redux/store";

function ResponsivePagination() {
  const { id } = useParams();
  const { pagedata, limitdata } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  const handleApiCall = () => {
    const pages = pagedata + 1;
    dispatch(PageData(pages));
    const apiOject = {
      page: pages,
      limit: limitdata,
      categorie: id,
    };

    if (id === "home") {
      // resetAppState()
      getNews(pagedata + 1, limitdata) // Assuming API expects 1-based page numbers
        .then((res) => {
          const data = res.data.newsfeed || [];
          dispatch(appendNewsData(data));
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    } else {
      // resetAppState()
      getnewsCategories(apiOject)
        .then((res) => {
          console.log(res);
          const data = res.data.newsfeed || [];
          // setNews(data);
          dispatch(appendNewsData(data));

          // Determine if it's the last page
          // setIsLastPage(data.length < rowsPerPage);
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    }
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%", p: "4px" }}
    >
      <Button variant="contained" onClick={handleApiCall}>
        More News ...
      </Button>
    </Stack>
  );
}

export default ResponsivePagination;
