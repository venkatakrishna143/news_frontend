import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavHeader = styled("header")(({ theme }) => ({
  width: "100%",
  height: "80px",
  //   padding: "8px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Nav = styled("nav")(({ theme }) => ({
  width: "90%",
  height: "80px",
  padding: "4px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  //  Responsive

  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    justifyContent: "space-evenly",

  },
}));

export const NavList = styled("ul")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding:0
,

  [theme.breakpoints.between("xs", "sm")]: {
    // border:'1px solid blue'
    padding:0


  },
}));

export const NavItem = styled("li")(({ theme }) => ({
  //  Responsive
  listStyle: "none",
  padding: "8px",
  [theme.breakpoints.between("xs", "sm")]: {
  // border:'1px solid blue'

  },
}));

export const NavLinks = styled(NavLink)(({ theme }) => ({
  color: theme.palette.background.main,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap:"6px",
  // padding: "4px",
  fontFamily:theme.typography.fontFamily,
  
  '&.active': {
    color: theme.palette.secondary.main, // Or any color you prefer for the active state
    // fontWeight: 'bold', // Make active link bold (optional)
  },

  [theme.breakpoints.between("xs", "sm")]: {},
}));
