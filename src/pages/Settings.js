import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import TabNav from "../components/TabNav";

function Settings() {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="start"
      sx={{ width: "90%", p: "4px" }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "start",
          flexDirection:'column',
          gap: "10px",
          width: "100%",
          p: "8px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Settings
        </Typography>
        <TabNav />
      </Card>
    </Stack>
  );
}

export default Settings;
