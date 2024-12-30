import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Add, Close, NewTab, SavedNews, UnSavedNews } from "../../assets/Icons";
import AgoTimeStamp from "../AgoTimeStamp";
import { Link, useNavigate } from "react-router-dom";
import NewsImage from "../../assets/images/news.jpg";
import { useAuth } from "../../pages/auth/Authenticate";
import Countries from "../../assets/countrys.json";

function ViewNews({ news, openDialog, closeDialog }) {
  const theme = useTheme();
  const { isAuthenticated } = useAuth();
    const Navigate = useNavigate()
  

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  const handleDate = (dt) => {
    console.log(dt);
    const date = new Date(dt);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleCountryName = (country) => {
    if (!country) return null;

    console.log(country);
    const code = country.toUpperCase();
    console.log(code);
    const countryName = Countries.find((item) => item.countryacode === code);
    console.log(countryName);
    return countryName.countryname || null; // Return `null` explicitly if no match is found
  };

  const handleSaveNews = () => {
    isAuthenticated ? Navigate("/user/saved-news") : Navigate("/user/login");
  };

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
          alignItems: "flex-start",
          justifyContent: "start",
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
          // p: "6px",
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
          sx={{ width: "100%", height: "450px" }}
          //   spacing={2}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: Mobile ? "100%" : "50%",
              //   border: "1px solid blue",
              height: Mobile ? "400px" : "450px",
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
            <ImageComponent
              src={news.news_url_to_image ? news.news_url_to_image : NewsImage}
              alt={news.news_title}
            />
          </Stack>
          <Stack
            direction="column"
            alignItems="flex-start"
            justifyContent="start"
            flexDirection="column"
            sx={{
              width: Mobile ? "100%" : "50%",
              // border: "1px solid blue",
              height: Mobile ? "200px" : "450px",
              //   overflowY: "scroll",
              p: "6px",
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
                {isAuthenticated ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SavedNews />}
                    size="small"
                  >
                    Saved
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<UnSavedNews />}
                    size="small"
                    onClick={handleSaveNews}
                  >
                    Save
                  </Button>
                )}
              </Stack>
            </DialogTitle>

            <Stack
              direction="column"
              alignItems="left"
              justifyContent="left"
              sx={{
                width: "100%",
                height: "inherit",
                overflowY: "scroll",
                position: "relative",
              }}
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
                spacing={0.5}
                sx={{ width: "auto", padding: "10px" }}
              >
                <NewsUrl to={news.news_url } target="blank">
                  Source
                </NewsUrl>
                <NewTab />
              </Stack>

              <Typography
                variant="body1"
                sx={{ color: "primary.main", fontWeight: "normal", p: "4px" }}
              >
                {news.news_content}
              </Typography>

              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                sx={{
                  width: "100%",
                  padding: "10px",
                  position: Mobile ? "relative" : "absolute",
                  bottom: 0,
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  justifyContent={Mobile ? "center" :"flex-end"}
                  sx={{ width: "100%" }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                    Source
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                    :
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "normal", textTransform: "capitalize" }}
                  >
                    {news.news_source ? news.news_source : "Anonymous"}
                  </Typography>
                </Stack>

                <Stack
                  direction={Mobile ?"column" :"row"}
                  alignItems="center"
                  spacing={1}
                  justifyContent="space-between"
                  sx={{ width: "100%" }}
                >
                  <Stack
                    direction="row"
                    alignItems="flex-start"
                    spacing={1}
                    justifyContent="center"
                    // sx={{width:"100%"}}
                  >
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      Published on
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      :
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "normal" }}>
                      {handleDate(news.news_published_at)}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: "normal", textTransform: "capitalize",textAlign:"left" }}
                  >
                    {handleCountryName(news.news_country)}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default ViewNews;

const ImageComponent = styled("img")(({ theme }) => ({
  width: "350px",
  height: "350px",
  // objectFit: "contain", // Image will scale to fit, leaving empty space if necessary

  [theme.breakpoints.between("xs", "md")]: {
    width: "200px",
    height: "200px",
    objectFit: "scale-down",
  },
}));

const NewsUrl = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,

  // objectFit: "contain", // Image will scale to fit, leaving empty space if necessary

  [theme.breakpoints.between("xs", "md")]: {},
}));
