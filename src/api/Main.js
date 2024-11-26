import api from "./axios";
import { newslinks } from "./urls";

// get All News

export const getNews = async (pagedata, limitdata) => {
  // console.log(pagedata, limitdata);
  const response = await api.post(
    newslinks.allnews,
    JSON.stringify({
      page: pagedata,
      limit: limitdata,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  // console.log(pagedata, limitdata);
  return response;
};

// get news by id

export const getnewsbyId = async (id) => {
  const response = await api.post(
    newslinks.getnewsbyid,
    JSON.stringify({
      newsId: id,
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
  const response = await api.post(
    newslinks.filters,
    JSON.stringify({
      search_key: data.searchdata,
      enddate: data.enddate,
      startdate: data.startdate,
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
  const response = await api.post(
    newslinks.categories,
    JSON.stringify({
      page: data.page,
      limit: data.limit,
      categories: data.categorie,
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
