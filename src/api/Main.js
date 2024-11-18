import api from "./axios";
import { newslinks } from "./urls";

// get All News

export const getNews = async (pagedata, limitdata) => {
  console.log(pagedata, limitdata);
  const response = await api.get(
    newslinks.allnews,
    JSON.stringify({
      body: {
        page: 1,
        limit: 10,
      },
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  console.log(pagedata, limitdata);
  return response;
};

// get news by id

export const getnewsbyId = async (data) => {
  const response = await axios.post(
    newslinks.getnewsbyid,
    JSON.stringify({
      newsId: data,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

// filters

export const getfilters = async (data) => {
  const response = await axios.post(
    newslinks.filters,
    JSON.stringify({
      search_key: data,
      enddate: data,
      startdate: data,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};

// Categories

export const getnewsCategories = async (data) => {
  const response = await axios.post(
    newslinks.categories,
    JSON.stringify({
      page: data,
      limit: data,
      categories: data,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return response;
};
