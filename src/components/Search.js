import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { SearchIcon } from "../assets/Icons";

function Search() {
  const theme = useTheme();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ py: "4px", width: "auto" }}
    >
      {Mobile ? <SearchIcon /> : (<TextField
      size="small"
      fullWidth
      autoComplete="off" // Disable autocomplete
      sx={{
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
          color: "white", // Optional: text color inside the input
        },
      }}
    />)}
    </Stack>
  );
}

export default Search;
