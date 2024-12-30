import React from "react";
import { NavItem, NavLinks, NavList } from "../theme/Resuable/NavComponents";
import { NavData } from "../mock/Nav";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { getNews, getnewsCategories } from "../api/News";
import { appendNewsData, newsData, resetState } from "../redux/slices/News";
import { useLocation } from "react-router-dom";
import { resetAppState } from "../redux/store";
function NavMenu({ click, closeMenu }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { pagedata, limitdata } = useSelector((state) => state.news);
  const { isAuthenticated, userdata } = useSelector((state) => state.auth);

  console.log(pathname)

  const dispatch = useDispatch();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const handleAPICall = (item) => {
    console.log(item);

    closeMenu();

    const apiOject = {
      page: pagedata,
      limit: limitdata,
      categorie: item,
    };

    if (item === "home") {
      resetAppState();

      getNews(pagedata, limitdata) // Assuming API expects 1-based page numbers
        .then((res) => {
          const data = res.data.newsfeed || [];
          dispatch(appendNewsData(data));
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    }  else {
      resetAppState();
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
    <NavList toggle={click}>
      {NavData.map((item) => (
        <NavItem key={item.id}>
          <NavLinks
            to={
              isAuthenticated
                ? `${item.authenticatedpath}/${userdata.name}/${item.apiid}`
                : item.path
            }
            onClick={() => handleAPICall(item.apiid)}
          >
            {item.icon}
            {item.title}
          </NavLinks>
        </NavItem>
      ))}
    </NavList>
  );
}

export default NavMenu;
