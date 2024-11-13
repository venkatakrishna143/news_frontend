export const apiurl = process.env.REACT_APP_API_URL;

export const newslinks = {
  categories: `${apiurl}categories`,
  filters: `${apiurl}filters`,
  getnewsbyid: `${apiurl}getnewsbyId`,
  allnews: `${apiurl}getallnews`,
};
