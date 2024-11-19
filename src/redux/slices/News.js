import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  pagedata: null,
  limitdata: null,
  newsdata: null,
  categories: null,
  isError: null,
};

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsData(state, action) {
      const response = action.payload;
      state.newsdata = response;
      state.isError = null;
    },
    PageData(state, action) {
      state.pagedata = action.payload;
    },
    DataLimit(state, action) {
      state.limitdata = action.payload;
    },
    CategorieData(state, action) {
      state.categories = action.payload;
    },

  },
});

export const { newsData,PageData,DataLimit,CategorieData } = slice.actions;

export default slice.reducer;
