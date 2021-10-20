import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "../reducers/urlReducer";
import { searchReducer } from "../reducers/searchReducer";

export const store = configureStore({
  reducer: { url: urlReducer, search: searchReducer },
});
