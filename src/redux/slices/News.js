import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

    // newsData(state, action) {
    //   const response = action.payload;
    //   state.newsdata = response;
    //   state.isError = null;
    // },
    PageData(state, action) {
      state.pagedata = action.payload;
    },
    DataLimit(state, action) {
      state.limitdata = action.payload;
    },
    CategorieData(state, action) {
      state.categories = action.payload;
    },
    resetState: () => initialState, 

  },
});

export const { appendNewsData,replaceNewsData,PageData,DataLimit,CategorieData,resetState } = slice.actions;

export default slice.reducer;
