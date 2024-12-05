import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  bookmarks: [],
  isError: null,
};

const slice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
   
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
    resetState: () => initialState, // Reset the entire state to its initial values
  },
});

export const {
  appendNewsData,
  replaceNewsData,
  PageData,
  DataLimit,
  CategorieData,
  resetPageData,
  resetState, // Export the new action
} = slice.actions;

export default slice.reducer;
