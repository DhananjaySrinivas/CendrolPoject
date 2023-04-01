import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./Store";

const store = configureStore({
  reducer: MovieReducer
});

export default store;
