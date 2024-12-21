export const apiurl = process.env.REACT_APP_API_URL1;

export const userapiurl = process.env.REACT_APP_API_URL2

export const newslinks = {
  categories: `${apiurl}categories`,
  filters: `${apiurl}filters`,
  getnewsbyid: `${apiurl}getnewsbyId`,
  allnews: `${apiurl}getallnews`,
};

export const apilinks = {
  auth: {
    register: `${userapiurl}user/signup`,
    vregister: `${userapiurl}user/validateregister`,
    login: `${userapiurl}user/login`,
    fpassword: `${userapiurl}user/forgotpassword`,
    rpassword: `${userapiurl}user/resetpassword`,
    cpassword: `${userapiurl}user/changepassword`,
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
