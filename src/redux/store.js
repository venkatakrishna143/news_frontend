import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { apiurl } from "../api/urls";
import { resetNewsState } from "./slices/News";

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

 const resetAppState = () => {
  // Reset in-memory Redux state
  store.dispatch(resetNewsState());

  // Clear persisted storage
  persistor.purge();
};



const { dispatch } = store;

const persistor = persistStore(store);

export { store, dispatch, persistor ,resetAppState };
