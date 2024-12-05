import React, { useState } from "react";
import { Nav, NavHeader } from "../theme/Resuable/NavComponents";
import {
  Avatar,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Search from "./Search";
import NavMenu from "./NavMenu";
import { Close, CloseMenu, MenuBars, SearchIcon } from "../assets/Icons";

function Navbar() {
  //  MediaQueries For Themes
  const theme = useTheme();
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "lg"));

  const [toggle, setToggle] = useState(false);

  const handleOpen = () => setToggle(!toggle);

  const handleClose = () => setToggle(false);

  // Search Bar

  const [click, setClick] = useState(false);

  const handleSearchOpen = () => {
    setClick(!click);
  };

  const handleSearchClose = () => {
    setClick(false);
  };

  return (
    <NavHeader>
      <Nav>
        {Mobile ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "4px", cursor: "pointer" }}
            onClick={handleOpen}
          >
            {toggle ? <CloseMenu /> : <MenuBars />}
          </Stack>
        ) : null}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          width="auto"
          sx={{ padding: "8px" }}
        >
          <Typography
            variant={Mobile ? "h5" : "h4"}
            sx={{ fontWeight: "bold", width: "auto" }}
          >
            Official News
          </Typography>
        </Stack>

        <NavMenu click={toggle} closeMenu={handleClose} />
        <Search toggle={click} closeSearch={handleSearchClose} />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ p: 1 }}
        >
          <SearchIcon onClick={handleSearchOpen} />
          <Avatar sx={{ width: 30, height: 30 }} />
        </Stack>
      </Nav>
    </NavHeader>
  );
}

export default Navbar;
