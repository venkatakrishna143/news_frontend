import React from "react";
import { Nav, NavHeader } from "../theme/Resuable/NavComponents";
import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Search from "./Search";
import NavMenu from "./NavMenu";

function Navbar() {
  //  MediaQueries For Themes
  const theme = useTheme();
  // const BelowMobile = useMediaQuery(theme.breakpoints.up("xs"));
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return (
    <NavHeader>
      <Nav>
        {/* {Mobile ? (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "4px" }}
          >
            Responsive
          </Stack>
        ) : null} */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          width="auto"
          sx={{ padding: "8px" }}
        >
         <Typography 
  variant={Mobile ? "body2" : "h4"} 
  sx={{ fontWeight: "bold", width: 'auto' }}
>
  Official News
</Typography>

        </Stack>
       <Search />
        <NavMenu />
      </Nav>
    </NavHeader>
  );
}

export default Navbar;
