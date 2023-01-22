import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import authSlice from "./features/atuh/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
