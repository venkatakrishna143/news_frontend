import React from "react";
import { Login, SavedNews, Settings } from "../assets/Icons";
import { Stack, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/Authenticate";
import { useSelector } from "react-redux";

function AvatarMenu({ toggle, closeMenu }) {
  const Navigate = useNavigate();
  const { logout } = useAuth();
  const theme = useTheme()
  const { isAuthenticated } = useSelector((state) => state.auth);
  const Mobile = useMediaQuery(theme.breakpoints.between("xs","sm"))
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
      path: "/user/settings",
      icon: <Settings />,
    },
    // {
    //   id: 3,
    //   title: isAuthenticated ? "Logout" : "Login",
    //   path: "/home",
    //   icon: <Login />,
    // },
  ];

  const handleNavigate = (path) => {
    Navigate(path);
    closeMenu;
  };

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    Navigate('/user/login')
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
        right: Mobile ? 0 : "60px",
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
        <NavItem key={item.id}>
          <Navlink to={item.path} onClick={closeMenu  }>
            {item.icon} {item.title}
          </Navlink>
        </NavItem>
      ))}

      {isAuthenticated ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Login />
          <Typography
            variant="body1"
            sx={{ fontWeight: "Normal",cursor:"pointer" }}
            onClick={handleLogout}
          >
            Logout
          </Typography>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Login />
          <Typography
            variant="body1"
            sx={{ fontWeight: "Normal",cursor:"pointer" }}
            onClick={handleLogin}
          >
            Login
          </Typography>
        </Stack>
      )}
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
