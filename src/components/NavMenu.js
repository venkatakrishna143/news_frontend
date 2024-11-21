import React from "react";
import { NavItem, NavLinks, NavList } from "../theme/Resuable/NavComponents";
import { NavData } from "../mock/Nav";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getNews, getnewsCategories } from "../api/Main";
import { newsData } from "../redux/slices/News";
import { useLocation } from "react-router-dom";

function NavMenu() {
  const theme = useTheme();
  const {pathname} = useLocation()
  const { pagedata, limitdata } = useSelector((state) => state.news);

  // console.log(pathname)

  const dispatch = useDispatch();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const handleAPICall = (item) => {
    // console.log(item);

    const apiOject = {
      page: pagedata,
      limit: limitdata,
      categorie: item,
    };

    if (item === "home") {
      getNews(pagedata, limitdata) // Assuming API expects 1-based page numbers
      .then((res) => {
        const data = res.data.newsfeed || [];
        dispatch(newsData(data));
      })
      .catch((err) => {
        console.error("Error fetching news data:", err);
      });
    } else {
      getnewsCategories(apiOject)
      .then((res) => {
        console.log(res);
        const data = res.data.newsfeed || [];
        // setNews(data);
        dispatch(newsData(data));

        // Determine if it's the last page
        // setIsLastPage(data.length < rowsPerPage);
      })
      .catch((err) => {
        console.error("Error fetching news data:", err);
      });
   }
  };

  return (
    <NavList>
      {NavData.map((item) => (
        <NavItem key={item.id}>
          <NavLinks to={item.path} onClick={() => handleAPICall(item.apiid)}>
            {item.icon}
            {!Mobile
              ? // <Typography variant="body2">{item.title}</Typography>
                item.title
              : null}
          </NavLinks>
        </NavItem>
      ))}
    </NavList>
  );
}

export default NavMenu;
