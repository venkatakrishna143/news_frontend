import api from "./axios";
import { apilinks } from "./urls";

export const cBookmark = async (data, token) => {
  const response = await api.post(
    apilinks.bookmarks.create,
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

export const getBookmarks = async (data, token) => {
  const response = await api.get(
    apilinks.bookmarks.get,
    JSON.stringify({
      page: data.page,
      limit: data.limit,
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
