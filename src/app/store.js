import { configureStore } from "@reduxjs/toolkit";
import api from "../api/puppyBowlApi";
import puppy from "../features/puppies/puppySlice";

// TODO: configure the store to use the API slice's auto-generated reducer and custom middleware.
const store = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      puppy,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export default store;
