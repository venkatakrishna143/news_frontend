import api from "./axios";
import { apilinks } from "./urls";

export const cBookmark = async (id, utoken) => {
  const response = await api.post(
    apilinks.bookmarks.create,
    JSON.stringify({
      news_id: id,
      token:utoken
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${utoken}`,
      },
    }
  );
  return response;
};

export const getBookmarks = async (pagedata,limitdata, utoken) => {
  const response = await api.post(
    apilinks.bookmarks.get,
    JSON.stringify({
      page: pagedata,
      limit:limitdata,
      token:utoken
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const deleteBookmark = async (data, token) => {
  const response = await api.delete(
    apilinks.bookmarks.delete,
    JSON.stringify({
      news_id: data.newsid,
    }),
    {
      headers: {
        "Content-Type": "application/JSON",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
