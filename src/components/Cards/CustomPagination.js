import { TablePagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNews } from '../../api/Main';

const CustomPagination = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // ---------------------------------------------- API Call

  const [news,setNews] = useState([])

  useEffect(() => {
    getNews(page,rowsPerPage)
      .then((res) => {
        console.log(res)
        // const data = res.data.response
        // setNews(data)
      })
      .catch((err) => {
      console.log(err)
    })

  },[])

  return (
    <TablePagination
      rowsPerPageOptions={[10, 20, 50, 100]}
      component="div"
      count={news.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default CustomPagination;
