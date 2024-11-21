import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNews, getnewsCategories } from '../../api/Main';
import { Stack, Typography, CircularProgress } from '@mui/material';
import { newsData } from '../../redux/slices/News';
import { useParams } from 'react-router-dom';

function LinkedInStyleScrollPagination() {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1); // Start with page 1 (assuming 1-based API indexing)
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [hasMore, setHasMore] = useState(true); // Track if more data is available
  const limitdata = 10; // Items per page
  const dispatch = useDispatch();
  const { id } = useParams();

  // Fetch data based on the current page
  const fetchData = async () => {
    if (!hasMore || isLoading) return; // Prevent unnecessary API calls

    setIsLoading(true); // Set loading state
    try {
      if (id === 'home') {
        const response = await getNews(page, limitdata);
        const data = response.data.newsfeed || [];
        if (data.length < limitdata) setHasMore(false); // No more data to load
        dispatch(newsData(data));
      } else {
        const apiObject = {
          page: page,
          limit: limitdata,
          categorie: 'item', // Replace with the actual category value
        };
        const response = await getnewsCategories(apiObject);
        const data = response.data.newsfeed || [];
        if (data.length < limitdata) setHasMore(false); // No more data to load
        dispatch(newsData(data));
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Handle scroll events for infinite scrolling
  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollTop + container.clientHeight >= container.scrollHeight - 50 // Trigger near the bottom
    ) {
      setPage((prevPage) => prevPage + 1); // Increment page number
    }
  };

  // Trigger data fetch when the page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Stack
      ref={containerRef}
      onScroll={handleScroll}
      sx={{
        width: '100%',
        height: '80vh',
        overflowY: 'auto',
        padding: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" gutterBottom>
        News Feed
      </Typography>

      {/* Add content dynamically */}
      <Typography variant="body1">
        Content will be dynamically loaded as you scroll down.
      </Typography>

      {/* Show loading spinner when fetching data */}
      {isLoading && (
        <CircularProgress
          size={24}
          sx={{ display: 'block', margin: '20px auto' }}
        />
      )}

      {/* Show message when there's no more data */}
      {!hasMore && (
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: 'gray', marginTop: '20px' }}
        >
          You have reached the end of the feed.
        </Typography>
      )}
    </Stack>
  );
}

export default LinkedInStyleScrollPagination;
