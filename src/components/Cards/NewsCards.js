import React, { useEffect, useState } from "react";
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
import { getNews, getnewsbyId, getnewsCategories } from "../../api/News";
import { Add, Close, SavedNews, UnSavedNews } from "../../assets/Icons";
import { useNavigate, useParams } from "react-router-dom";
import ScrollPagination from "./ScrollPagination";
import { useTheme } from "@emotion/react";
import ResponsivePagination from "./ResponsivePagination";
import Title from "../Title";
import ViewNews from "./ViewNews";
import AgoTimeStamp from "../AgoTimeStamp";
import {
  appendNewsData,
  PageData,
  resetNewsState,
} from "../../redux/slices/News";
import { resetState } from "../../redux/slices/Auth";
import { resetAppState } from "../../redux/store";
import NewsImage from "../../assets/images/news.jpg";
import { useAuth } from "../../pages/auth/Authenticate";
import { cBookmark, getBookmarks } from "../../api/Bookmark";
import SuccessBar from "../SnackBars/SuccessBar";
import ErrorBar from "../SnackBars/ErrorBar";

function NewsCards() {
  const { id } = useParams();

  // console.log(id);
  const theme = useTheme();

  const [bookmarks, setBookmarks] = useState([]);

  const { isAuthenticated, tokendata } = useSelector((state) => state.auth);

  const Navigate = useNavigate();
  const showSuccess = SuccessBar();
  const showError = ErrorBar();

  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const [newsidData, setnewsidData] = useState([]);

  const { newsdata, pagedata, limitdata } = useSelector((state) => state.news);

  const dispatch = useDispatch();

  // const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const pages = pagedata + 1;
    // dispatch(PageData(pages));
    const apiOject = {
      page: pagedata,
      limit: limitdata,
      categorie: id,
    };

    resetAppState();
    if (id === "home") {
      getNews(pagedata, limitdata) // Assuming API expects 1-based page numbers
        .then((res) => {
          const data = res.data.newsfeed || [];
          dispatch(appendNewsData(data));
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    } else if (id === "saved-news" && isAuthenticated) {
      resetAppState();
      getBookmarks(pagedata, limitdata, tokendata) // Assuming API expects 1-based page numbers
        .then((res) => {
          const data = res.data.data || [];
          dispatch(appendNewsData(data));
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    } else {
      getnewsCategories(apiOject)
        .then((res) => {
          console.log(res);
          const data = res.data.newsfeed || [];
          // setNews(data);
          dispatch(appendNewsData(data));

          // Determine if it's the last page
          // setIsLastPage(data.length < rowsPerPage);
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    }
  }, []);

  useEffect(() => {
    getBookmarks(pagedata, limitdata, tokendata) // Assuming API expects 1-based page numbers
      .then((res) => {
        console.log(res);
        const data = res.data.data || [];
        // dispatch(appendNewsData(data));
        setBookmarks(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching news data:", err);
      });
  }, []);
  

  const handleSaveNews = (id) => {
    if (isAuthenticated) {
      // Navigate to saved news and call the API
      // Navigate("/user/saved-news");

      cBookmark(id, tokendata)
        .then((res) => {
          const success = res.data.success;
          if (success) {
            showSuccess(res.data.message);
            const data = res.data.newsfeed || [];
            dispatch(appendNewsData(data));
          } else {
            showError(res.data.message);
          }
        })
        .catch((err) => {
          console.error("Error fetching news data:", err);
        });
    } else {
      // Navigate to the login page
      Navigate("/user/login");
    }
  };

  const handleViewNews = (id) => {
    // console.log(id);
    handleClickOpen();
    getnewsbyId(id)
      .then((res) => {
        // console.log(res);
        const status = res.status;
        if (status === 200) {
          // console.log(res.data.values);
          setnewsidData(res.data.values);
        } else setnewsidData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //  View News

  // Closing

  useEffect(() => {
    const handleAppClose = () => {
      dispatch(resetNewsState());
      dispatch(resetState());
    };

    // Attach event listener for unload
    window.addEventListener("beforeunload", handleAppClose);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleAppClose);
    };
  }, [dispatch]);

  

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
            sx={{
              color: "secondary.main",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {id === "home" ? "All News" : id}
          </Typography>
        </Box>
      </Stack>
      {newsdata.length !== 0 ? (
        newsdata.map((item, index) => {
          const isBookmarked = bookmarks?  bookmarks.includes(item.id) : []
          console.log(isBookmarked,'Bookmarks')
          return (
            <Card
              key={item.news_id}
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
                height: "510px",
                gap: "10px",
              }}
            >
              <Stack
                direction="row"
                alignItems="flex-start"
                justifyContent="space-between"
                sx={{ width: "100%" }}
              >
                <Stack direction="column" alignItems="left">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      Author
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      :
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "normal" }}>
                      {item.news_author ? item.news_author : "Anonymous"}
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      Category
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bolder" }}>
                      :
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "normal" }}>
                      {item.news_category ? item.news_category : "Anonymous"}
                    </Typography>
                  </Stack>
  
                  <AgoTimeStamp time={item.news_published_at} />
                </Stack>
  
                {/* {isBookmarked  ? (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SavedNews />}
                    size="small"
                    onClick={() => handleSaveNews(item.news_id)}
                  >
                    Saved
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<UnSavedNews />}
                    size="small"
                    onClick={() => handleSaveNews(item.news_id)}
                  >
                    Save
                  </Button>
                )} */}

<Button
                    variant="contained"
                    color="primary"
                    startIcon={<UnSavedNews />}
                    size="small"
                    onClick={() => handleSaveNews(item.news_id)}
                  >
                    Save
                  </Button>
              </Stack>
              {/* <Typography variant="body1" sx={{ fontWeight: "bolder" }}>
                {item.news_title}
              </Typography> */}
  
              <Title text={item.news_title} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%", height: "450px", p: "10px" }}
                onClick={() => handleViewNews(item.news_id)}
              >
                <ImageComponent
                  src={
                    item.news_url_to_image ? item.news_url_to_image : NewsImage
                  }
                  alt={item.news_title}
                />
              </Stack>
            </Card>
          )
        })
      ) : (
        <Typography>No News Found !</Typography>
      )}
      <ResponsivePagination />
      {/* {Mobile ? null : <CustomPagination />} */}
      {newsidData.map((item) => (
        <ViewNews
          key={item.news_id}
          news={item}
          openDialog={open}
          closeDialog={handleClose}
        />
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
  flexDirection: "column",
  gap: "16px", // Adjust the spacing between cards
  flexGrow: 1,
  margin: "0 auto", // Centers the content horizontally
  position: "relative",
  width: "100%", // Ensures full-width responsiveness
  maxWidth: "800px", // Optional: limit the max width for better aesthetics

  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

export const ImageComponent = styled("img")(({ theme }) => ({
  width: "350px",
  height: "350px",
  // objectFit: "fill", // Image will scale to fit, leaving empty space if necessary
}));
