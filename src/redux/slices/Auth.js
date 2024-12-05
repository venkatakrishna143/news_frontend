import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tokendata: "",
  userdata: "",

  isError: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokendata: (state, action) => {
      state.tokendata = action.payload; // Update pagedata
    },
    userdata: (state, action) => {
      state.userdata = action.payload; // Update limitdata
    },

    resetState: () => initialState, // Reset the entire state to its initial values
  },
});

export const {
  tokendata,
  userdata,
  resetState, // Export the new action
} = slice.actions;

export default slice.reducer;
