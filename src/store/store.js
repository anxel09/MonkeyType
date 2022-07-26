import { configureStore } from "@reduxjs/toolkit";
import  textSlice  from "../features/TextSlicer";

export const store = configureStore({
  reducer:{
    text:textSlice,
  }
})
