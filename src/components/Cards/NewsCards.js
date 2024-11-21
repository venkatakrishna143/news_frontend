import React, { useState } from "react";
// import { News } from "../../theme/Resuable/CardComponents";
import {
  Card,
  styled,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  Box,
  Button,
  useMediaQuery,
  // Button
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CustomPagination from "./CustomPagination";
import { useDispatch, useSelector } from "react-redux";
// import { newsData } from "../../redux/slices/News";
import { getnewsbyId } from "../../api/Main";
import { Add, Close } from "../../assets/Icons";
import { useParams } from "react-router-dom";
import ScrollPagination from "./ScrollPagination";
import { useTheme } from "@emotion/react";
import ResponsivePagination from "./ResponsivePagination";

function NewsCards() {
  const { id } = useParams();
  // console.log(id);
  const theme = useTheme()

  const Mobile = useMediaQuery(theme.breakpoints.between("xs","sm"))
  const [newsidData, setnewsidData] = useState([]);

  const { newsdata } = useSelector((state) => state.news);

  // const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewNews = (id) => {
    // console.log(id);
    handleClickOpen();
    getnewsbyId(id)
      .then((res) => {
        console.log(res);
        const status = res.status;
        if (status === 200) {
          console.log(res.data.values);
          setnewsidData(res.data.values);
        } else setnewsidData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //  View News

  return (
    <News item component={Card} xs={12} md={5.2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", p: "10px" }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "secondary.main" }}
        >
          Latest News
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: "4px",
            px: "8px",
            backgroundColor: "primary.main",
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "secondary.main", fontWeight: "bold",textTransform:"capitalize" }}
          >
            {id === "home" ? "All News" : id}
          </Typography>
        </Box>
      </Stack>
      {newsdata ? (
        newsdata.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              p: "10px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "start",
              flexDirection: "column",
              mb: "10px",
              cursor: "pointer",
              height: "450px",
              gap:"10px"
            }}
            onClick={() => handleViewNews(item.news_id)}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{width:"100%"}}>
              <Stack>
              <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
              {item.news_author ? item.news_author : "Author"}
                </Typography>
                <Typography variant="body2" sx={{ fontSize:"12px" }}>
              categorie
              </Typography>
            </Stack>
              <Button variant="outlined" color="secondary" startIcon={<Add />} size="small">
                Follow
             </Button>
            </Stack>
            <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
              {item.news_title}
            </Typography>
          </Card>
        ))
      ) : (
        <Typography>No News Found !</Typography>
      )}
   <CustomPagination />
      {newsidData.map((item) => (
        <Dialog
          open={open}
          key={item.news_id}
          PaperProps={{
            sx: { width: "80%", maxWidth: "600px", margin: "auto" }, // Responsive sizing
          }}
        >
          <DialogTitle
            id={`alert-dialog-title-${item.news_id}`}
            sx={{
              // color: "secondary.main",

              textAlign: "left", // Aligns title to the left
              display: "flex", // Allows the title and close button to appear inline
              justifyContent: "space-between", // Pushes the close button to the right
              alignItems: "flex-start", // Vertically centers the content
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "secondary.main", fontWeight: "bold" }}
            >
              {item.news_title}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose} // Replace with your close handler
              sx={{
                color: "primary.main",
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            {item.news_url_to_image ? (
              <iframe
                src={item.news_url_to_image}
                title={item.news_title}
                style={{
                  width: "100%",
                  height: "450px",
                  border: "none",
                }}
              />
            ) : null}
          </DialogContent>
        </Dialog>
      ))}
    </News>
  );
}

export default NewsCards;

const articles = [
  {
    id: 1,
    title: "News 1",
    summary: "Summary 1",
    content: "Content 1",
    // image: "/assets/images/news1.jpg",
  },
  {
    id: 2,
    title: "News 2",
    summary: "Summary 2",
    content: "Content 2",
    // image: "/assets/images/news2.png",
  },
];

const News = styled(Grid)(({ theme }) => ({
  padding: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column ",
  gap: 2,
}));
