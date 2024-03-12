import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pageSlice";
import memberReducer from "../features/memberSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    member: memberReducer,
  }
});

export default store;
