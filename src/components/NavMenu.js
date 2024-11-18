import React from "react";
import { NavItem, NavLinks, NavList } from "../theme/Resuable/NavComponents";
import { NavData } from "../mock/Nav";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

function NavMenu() {
  const theme = useTheme();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const handleAPICall = (item) => {
    console.log(item);

    // const apiOject = {
    //   page:ite
    // }
  };

  return (
    <NavList>
      {NavData.map((item) => (
        <NavItem key={item.id}  onClick={() => handleAPICall(item.apiid)}>
          <NavLinks to={item.path}>
            {item.icon}
            {!Mobile ? (
              // <Typography variant="body2">{item.title}</Typography>
            item.title
            ) : null}
          </NavLinks>
        </NavItem>
      ))}
    </NavList>
  );
}

export default NavMenu;
