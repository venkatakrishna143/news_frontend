import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";

const customeStyles = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "capitalize",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#191645",
    },
    secondary: {
      main: "#43C6AC",
    },
    background: {
      main: "#f1f1f1",
    },
  },

  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },

  typography: {
    fontFamily:["Montserrat"," sans-serif"].join()
  }
});

export default customeStyles;
