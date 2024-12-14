import React from "react";
import { Login, SavedNews, Settings } from "../assets/Icons";
import { Stack, styled, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/Authenticate";

const Menu = [
  {
    id: 1,
    title: "Saved News",
    path: "/user/saved-news",
    icon: <SavedNews />,
  },
  {
    id: 2,
    title: "Settings",
    path: "/user/Settings",
    icon: <Settings />,
  },
  {
    id: 3,
    title: "Login",
    path: "/user/login",
    icon: <Login />,
  },
];

function AvatarMenu({ toggle, closeMenu }) {
  const Navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const handleNavigate = (path) => {
    Navigate(path);
    closeMenu;
  };
  return (
    <Stack
      direction="column"
      alignItems="left"
      spacing={2}
      justifyContent="space-between"
      sx={{
        width: "auto",
        height: "auto",
        // padding: "10px",
        px: "20px",
        py: "10px",
        position: "absolute",
        top: toggle ? "80px" : "-2000%",
        right: "60px",
        bgcolor: "primary.main",
        transition: "all 0.5s ease",
        zIndex: "-1",
      }}
    >
      {isAuthenticated ? (
        <Typography variant="h6" sx={{ fontWeight: "Normal" }}>
          userName
        </Typography>
      ) : null}
      {Menu.map((item) => (
        <NavItem>
          <Navlink to={item.path}>
            {item.icon} {item.title}
          </Navlink>
        </NavItem>
      ))}
    </Stack>
  );
}

export default AvatarMenu;

const NavItem = styled("li")(({ theme }) => ({
  listStyle: "none",
}));

const Navlink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
  color: theme.palette.background.main,
}));
