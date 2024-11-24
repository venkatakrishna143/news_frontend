import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Add, Close } from "../../assets/Icons";
import { useTheme } from "@emotion/react";
import AgoTimeStamp from "../AgoTimeStamp";
import { Link } from "react-router-dom";

function ViewNews({ news, openDialog, closeDialog }) {
  const theme = useTheme();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  return (
    <Dialog
      open={openDialog}
      key={news.news_id}
      PaperProps={{
        sx: {
          width: !Mobile ? "90%" : "100%",
          maxWidth: Mobile ? "500px" : "900px",
          //   margin: "auto",
          height: Mobile ? "500px" : "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   py: 0,
        }, // Responsive sizing
      }}
    >
      {/*  */}

      <DialogContent
        sx={{
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: "6px",
          position: "relative",
        }}
      >
        {Mobile ? null : (
          <IconButton
            aria-label="close"
            onClick={closeDialog} // Replace with your close handler
            sx={{
              color: "primary.main",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            <Close />
          </IconButton>
        )}
        {/* {news.news_url_to_image ? (
        <iframe
          src={news.news_url_to_image}
          title={news.news_title}
          style={{
            width: "100%",
            height: "450px",
            border: "none",
          }}
        />
      ) : null} */}
        <Stack
          direction={Mobile ? "column" : "row"}
          alignItems="center"
          justifyContent={Mobile ? "center" : "space-between"}
          sx={{ width: "100%", height: "480px" }}
          //   spacing={2}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: Mobile ? "100%" : "60%",
              //   border: "1px solid blue",
              height: Mobile ? "450px" : "450px",
              //   p: 1,
              bgcolor: "black",
              position: "relative",
              color: "secondary.main",
            }}
            //   onClick={() => handleViewNews(item.news_id)}
          >
            {Mobile ? (
              <IconButton
                aria-label="close"
                onClick={closeDialog} // Replace with your close handler
                sx={{
                  color: "primary.main",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  color: "secondary.main",
                }}
              >
                <Close />
              </IconButton>
            ) : null}
            Image
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="start"
            flexDirection="column"
            sx={{
              width: Mobile ? "100%" : "40%",
              // border: "1px solid blue",
              height: Mobile ? "200px" : "450px",
              //   overflowY: "scroll",
              p: "8px",
            }}
          >
            <DialogTitle
              id={`alert-dialog-title-${news.news_id}`}
              sx={{
                // color: "secondary.main",
                width: "100%",
                textAlign: "left", // Aligns title to the left
                display: "flex", // Allows the title and close button to appear inline
                justifyContent: "space-between", // Pushes the close button to the right
                alignItems: "flex-start",
                // border: "1px solid blue",
                position: "relative",
                py: "0px",
                px: "4px",
              }}
            >
              <Stack
                direction="row"
                alignItems="start"
                justifyContent="space-between"
                sx={{
                  width: "100%",
                  // border: "1px solid blue",
                }}
              >
                <Stack
                  direction="column"
                  alignItems="start"
                  justifyContent="left"
                  sx={{ width: Mobile ? "100%" : "50%", py: "4px" }}
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      Author
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      :
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "normal" }}>
                      {news.news_author ? news.news_author : "Anonymous"}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      Category
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      :
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "normal", textTransform: "capitalize" }}
                    >
                      {news.news_category ? news.news_category : "Anonymous"}
                    </Typography>
                  </Stack>
                  <AgoTimeStamp time={news.news_published_at} />
                </Stack>
                <Button
                  variant="text"
                  color="secondary"
                  startIcon={<Add />}
                  size="small"
                >
                  Follow
                </Button>
              </Stack>
            </DialogTitle>

            <Stack
              direction="column"
              alignItems="left"
              justifyContent="left"
              sx={{ width: "100%", height: "inherit", overflowY: "scroll" }}
            >
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", fontWeight: "bold", p: "4px" }}
              >
                {news.news_title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "primary.main", fontWeight: "normal", p: "4px" }}
              >
                {news.news_description}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="left"
                spacing={1}
              >
                {/* <Typography variant="body1">
                  Source
                </Typography>
                <Typography>
                  :
                </Typography> */}
                <Link to={news.news_url}>Source</Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ViewNews;
