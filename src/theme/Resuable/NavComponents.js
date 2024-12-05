import { styled } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
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
  zIndex: 1,
  position: "fixed",

    

  [theme.breakpoints.between("xs", "md")]: {
    // position: "fixed",
    top: 0,
    zIndex: 1,
  },
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
    justifyContent: "space-between",
  },
}));

export const NavList = styled("ul")(({ theme, toggle }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  [theme.breakpoints.between("xs", "lg")]: {
    // border:'1px solid blue'
    padding: 0,
    position: "fixed",
    top: "60px",
    backgroundColor: theme.palette.primary.main,
    width: "auto",
    height: "100%",
    zIndex: 1,
    flexDirection: "column",
    justifyContent: "left",
    alignItems: "left",
    left: toggle ? 0 : "-120%",
    transition: "all 1s ease;",
  },
}));

export const NavItem = styled("li")(({ theme }) => ({
  //  Responsive
  listStyle: "none",
  padding: "8px",
  [theme.breakpoints.between("xs", "sm")]: {
    // border:'1px solid blue'
    padding: "10px",
  },
}));

export const NavLinks = styled(NavLink)(({ theme }) => ({
  color: theme.palette.background.main,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "6px",
  // padding: "4px",
  fontFamily: theme.typography.fontFamily,

  "&.active": {
    color: theme.palette.secondary.main, // Or any color you prefer for the active state
    // fontWeight: 'bold', // Make active link bold (optional)
  },

  [theme.breakpoints.between("xs", "sm")]: {
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "left",
    padding: "4px",
  },
}));
