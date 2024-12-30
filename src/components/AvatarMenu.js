import React from "react";
import { Login, SavedNews, Settings } from "../assets/Icons";
import {
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/Authenticate";
import { useSelector } from "react-redux";
import SuccessBar from "./SnackBars/SuccessBar";
import ErrorBar from "./SnackBars/ErrorBar";

function AvatarMenu({ toggle, closeMenu }) {
  const Navigate = useNavigate();
  const {pathname} = useLocation()
  const { logout } = useAuth();
  const theme = useTheme();
  const showSuccess = SuccessBar();
  const showError = ErrorBar();
  const { isAuthenticated, userdata ,tokendata} = useSelector((state) => state.auth);
  const { pagedata, limitdata } = useSelector((state) => state.news);
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const Menu = [
    {
      id: 1,
      title: "Saved News",
      path: `/user/${userdata.name}/saved-news`,
      icon: <SavedNews />,
    },
    {
      id: 2,
      title: "Settings",
      path: "/user/settings",
      icon: <Settings />,
    },
  ];

  const handleNavigate = (path) => {
    if (path === `/user/${userdata.name}/saved-news` && isAuthenticated) {
      resetAppState();
      getBookmarks(pagedata, limitdata,tokendata) // Assuming API expects 1-based page numbers
        .then((res) => {
          console.log(res)
          const success = res.data.success
          
          if (success) {
            showSuccess(res.data.message)
            const data = res.data.data || [];
            dispatch(appendNewsData(data));
          } else {
            showError(res.data.message)
          }
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    }
  };

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    Navigate("/user/login");
  };
  return (
    <Stack
      direction="column"
      alignItems="left"
      spacing={1}
      justifyContent="space-between"
      sx={{
        width: "auto",
        height: "auto",
        // padding: "10px",
        p: "12px",
        position: "absolute",
        top: toggle ? "80px" : "-2000%",
        right: Mobile ? 0 : "60px",
        bgcolor: "primary.main",
        transition: "all 0.5s ease",
        zIndex: "-1",
      }}
    >
      {isAuthenticated ? (
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textTransform: "capitalize" }}
        >
          {userdata.name}
        </Typography>
      ) : null}

      {isAuthenticated ? (
        <Typography variant="body2" sx={{ fontWeight: "normal" }}>
          {userdata.email}
        </Typography>
      ) : null}
      {Menu.map((item) => (
        <NavItem key={item.id}>
          <Navlink
            to={item.path}
            onClick={() => {
              closeMenu();
              handleNavigate();
            }}
          >
            {item.icon} {item.title}
          </Navlink>
        </NavItem>
      ))}

      {isAuthenticated ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Login />
          <Typography
            variant="body1"
            sx={{ fontWeight: "Normal", cursor: "pointer" }}
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
            sx={{ fontWeight: "Normal", cursor: "pointer" }}
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
  padding: "4px",
}));

const Navlink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textDecoration: "none",
  color: theme.palette.background.main,
}));
