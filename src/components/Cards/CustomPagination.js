import { Stack, TablePagination } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { getNews } from "../../api/Main";
import { useDispatch } from "react-redux";
import { DataLimit, newsData, PageData } from "../../redux/slices/News";

const CustomPagination = () => {
  const [page, setPage] = useState(0); // Zero-based indexing
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [news, setNews] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false); // To track the last page

  const dispatch = useDispatch();
  const prevPageRef = useRef(page); // Ref to track previous page

  // Handle page change (Next and Previous)
  const handleChangePage = (event, newPage) => {
    const prevPage = prevPageRef.current; // Access the previous page value

    // Update the current page
    setPage(newPage);

    // Log the previous and new page values for debugging
    console.log("Previous Page:", prevPage);
    console.log("New Page:", newPage);

    const pages = newPage + 1; // API expects 1-based page numbers
    dispatch(PageData(pages));
    dispatch(DataLimit(rowsPerPage));

    // Update the previous page ref
    prevPageRef.current = newPage;
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Reset to the first page when rows per page changes
  };

  // Fetch data whenever page or rowsPerPage changes
  useEffect(() => {
    getNews(page + 1, rowsPerPage) // API expects 1-based page numbers
      .then((res) => {
        const data = res.data.newsfeed || [];
        setNews(data);
        dispatch(newsData(data));
        dispatch(PageData(page + 1)); // Keep page data in sync with the API
        dispatch(DataLimit(rowsPerPage));
        // Determine if it's the last page
        setIsLastPage(data.length < rowsPerPage);
      })
      .catch((err) => {
        console.error("Error fetching news data:", err);
      });
  }, [page, rowsPerPage, dispatch]);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ padding: "12px", overflowX: "auto", width: "100%" }}
    >
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, 100]} // Responsive row options
        component="div"
        count={(page + 1) * rowsPerPage} // Simulate total count
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ disabled: isLastPage }} // Disable "Next" if last page
        backIconButtonProps={{ disabled: page === 0 }} // Disable "Previous" if first page
        sx={{
          ".MuiTablePagination-toolbar": {
            flexWrap: "wrap", // Make toolbar responsive
          },
          ".MuiTablePagination-actions": {
            display: "flex",
            justifyContent: "flex-end", // Align actions
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
