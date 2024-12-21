import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  tokendata: "",
  userdata: "",
  isAuthenticated: false, // Tracks user authentication status
  encrypted: {
    enemail: "", // Stores encrypted email
    euid: "", // Stores encrypted user ID
  },
  isError: null, // Tracks error status
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokendata: (state, action) => {
      state.tokendata = action.payload; // Update token data
    },
    userdata: (state, action) => {
      state.userdata = action.payload; // Update user data
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload; // Update authentication status
    },
    encrypedtedDetails: (state, action) => {
      state.encrypted = { ...state.encrypted, ...action.payload }; // Update userDetails object
    },
    resetState: () => initialState, // Reset the state to its initial values
  },
});

export const {
  tokendata,
  userdata,
  setAuthenticated, // Export action to update authentication status
  encrypedtedDetails, // Export action to update userDetails
  resetState,
} = slice.actions;

export default slice.reducer;
