import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  pagedata: 1,
  limitdata: 10,
  newsdata: [],
  categories: null,
  isError: null,
};

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    appendNewsData: (state, action) => {
      state.newsdata = [...state.newsdata, ...action.payload]; // Append new data
    },
    replaceNewsData: (state, action) => {
      state.newsdata = action.payload; // Replace with new data
    },
    PageData: (state, action) => {
      state.pagedata = action.payload; // Update pagedata
    },
    DataLimit: (state, action) => {
      state.limitdata = action.payload; // Update limitdata
    },
    CategorieData: (state, action) => {
      state.categories = action.payload; // Update categories
    },
    resetPageData: (state) => {
      state.pagedata = initialState.pagedata; // Reset only pagedata
    },
    resetNewsState: () => initialState, // Reset the entire state to its initial values
  },
});

export const {
  appendNewsData,
  replaceNewsData,
  PageData,
  DataLimit,
  CategorieData,
  resetPageData,
  resetNewsState, // Export the new action
} = slice.actions;

export default slice.reducer;
