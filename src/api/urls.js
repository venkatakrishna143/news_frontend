export const apiurl = process.env.REACT_APP_API_URL;

export const newslinks = {
  categories: `${apiurl}categories`,
  filters: `${apiurl}filters`,
  getnewsbyid: `${apiurl}getnewsbyId`,
  allnews: `${apiurl}getallnews`,
};

export const apilinks = {
  auth: {
    register: `${apiurl}user/signup`,
    vregister: `${apiurl}user/ValidateRegister`,
    login: `${apiurl}user/login`,
  },
  news: {
    categories: `${apiurl}categories`,
    filters: `${apiurl}filters`,
    getnewsbyid: `${apiurl}getnewsbyId`,
    allnews: `${apiurl}getallnews`,
  },
  bookmarks: {
    create: `${apiurl}user/createbookmark`,
    get: `${apiurl}user/getbookmarks`,
    delete: `${apiurl}user/deletebookmarks`,
  },
};
