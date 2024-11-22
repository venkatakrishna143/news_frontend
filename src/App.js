import React from "react";
import TopNav from "./components/others/TopNav";
import LeftSidebar from "./components/others/LeftSidebar";
import MainFeed from "./components/others/MainFeed";
import RightSidebar from "./components/others/RightSidebar";
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

function App() {
  const apiurl = process.env.REACT_APP_API_URL;
  // console.log(apiurl);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={customeStyles}>
          <MainContainer>
            <Navbar />
            {/* <Search /> */}
            <BodyOuterContainer>
              <PageRoutes />
            </BodyOuterContainer>
          </MainContainer>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>

    // <div className="App">
    //   <TopNav />
    //   <div className="main-layout">
    //     <LeftSidebar />
    //     <MainFeed />
    //     <RightSidebar />
    //   </div>
    // </div>
  );
}

export default App;

// Styling

const MainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.background.main,
  color: theme.palette.background.main,
  display: "flex",
  alignItems: "start",
  justifyContent: "flex-start",
  flexDirection: "column",
  position: "relative",
}));

const BodyOuterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "calc(100vh - 80px)",
  backgroundColor: theme.palette.background.main,
  // color: theme.palette.background.main,
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  position: "absolute",
    bottom: 0,
  // border: "1px solid blue",

  // margin:'10px'

  [theme.breakpoints.between("xs", "md")]: {
    
  },
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

  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    padding: "8px",
  },
}));
