import React from "react";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, SearchIcon } from "../assets/Icons";

function Search({ toggle, closeSearch }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      sx={{
        width: isMobile ? "100%" : "89%",
        position: "absolute",
        top: toggle ? "80px" : "-120%",
        bgcolor: "secondary.main",
        py: 2,
        px: 1,
        transition: "all 0.5s ease",
        zIndex: -1,
      }}
    >
      <TextField
        size="small"
        variant="standard"
        autoComplete="off" // Disable autocomplete
        placeholder="Search..."
        sx={{
          width: "50%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white", // Normal state
            },
            "&:hover fieldset": {
              borderColor: "white", // Hover state
            },
            "&.Mui-focused fieldset": {
              borderColor: "white", // Focused state
            },
          },
          input: {
            color: "white", // Input text color
          },
          "& .MuiInputBase-input::placeholder": {
            color: "primary.main", // Placeholder color
            opacity: 1, // Ensure placeholder is visible
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="outlined"
        startIcon={<Close />}
        onClick={closeSearch}
        color="primary"
      >
        Cancel
      </Button>
    </Stack>
  );
}

export default Search;
