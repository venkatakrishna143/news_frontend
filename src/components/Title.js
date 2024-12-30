import { useTheme } from "@emotion/react";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

function Title({ text = "" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const characterLimit = isMobile ? 25 : 30; // Character limit for truncation
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(true); // Show full text on toggle
  };

  const displayText = text 
    ? showFullText 
      ? text 
      : text.slice(0, characterLimit) 
    : "Title Loading";

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
      style={{ width: "100%" }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        {displayText}
      </Typography>

      {!showFullText && text.length > characterLimit && (
        <Typography
          variant="body2"
          sx={{
            textTransform: "lowercase",
            cursor: "pointer",
            "&:hover": {
              color: "blue",
              textDecoration: "underline",
            },
          }}
          onClick={toggleText}
        >
          ...more
        </Typography>
      )}
    </Stack>
  );
}

export default Title;
