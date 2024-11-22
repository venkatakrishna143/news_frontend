import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

function Title({ text }) {
  const limit = 30; // Character limit for truncation
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(true); // Only sets the state to show full text
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="left"
      spacing={2}
      style={{ width: "100%" }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {showFullText ? text : `${text.slice(0, limit)}`}
      </Typography>

      {!showFullText && text.length > limit && (
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
