import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiurl } from "../api/urls";

const persistConfig = {
  key: "root",
  storage, // Use localStorage by default
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  // Add middleware or other configurations as needed
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: apiurl,
        // extraArgument: APIURL2,
      },
      serializableCheck: false
    }),
});

const { dispatch } = store;

const persistor = persistStore(store);

export { store, dispatch, persistor };
