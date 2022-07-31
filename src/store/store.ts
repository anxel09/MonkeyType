import { configureStore } from "@reduxjs/toolkit";
import ChartSlicer from "../features/ChartSlicer";
import  textSlice  from "../features/TextSlicer";

export const store = configureStore({
  reducer:{
    text:textSlice,
    chart:ChartSlicer,
  }
})


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch