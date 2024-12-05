import React from "react";
import "./App.css";
import { styled, ThemeProvider } from "@mui/material/styles";
import customeStyles from "./theme/CustomeStlyles";
import Navbar from "./components/Navbar";
import { Box, Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import PageRoutes from "./router/PageRoutes";
import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Search from "./components/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  const NavCondition =
    pathname === "/user/login" ||
    pathname === "/user/register" ||
    pathname === "/pagenotfound";

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={customeStyles}>
            <MainContainer>
              {NavCondition ? null : <Navbar />}
              {/* <Search /> */}
              <BodyOuterContainer Nav={NavCondition}>
                <PageRoutes />
              </BodyOuterContainer>
            </MainContainer>
          </ThemeProvider>
        </LocalizationProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;

// Styling

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.background.main,
  // color: theme.palette.background.main,
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  position: "relative",
}));

const BodyOuterContainer = styled(Box)(({ theme, Nav }) => ({
  width: "100%",
  height: Nav ? "100vh" : "calc(100vh - 80px)",
  backgroundColor: theme.palette.background.main,
  // color: theme.palette.background.main,
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  position: "absolute",
  bottom: 0,
  // border: "1px solid blue",

  // margin:'10px'

  [theme.breakpoints.between("xs", "md")]: {},
}));

export const BodyInnerContainer = styled(Grid)(({ theme }) => ({
  width: "90%",
  // height: "calc(100vh - 80px)",
  backgroundColor: theme.palette.background.main,
  color: theme.palette.primary.main,
  padding: "10px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  position: "relative",
  // border:'1px solid blue',

  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    padding: "8px",
    justifyContent: "center",
  },
}));
