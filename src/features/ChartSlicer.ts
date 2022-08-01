import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type time = number

interface IError{
  time:time;
  error:1;
}


interface IChart{ 
  time:time;
  errors: IError[];
  wordsPerMinute: number[];

}

const initialState:IChart = {
  time: 0,
  errors: [],
  wordsPerMinute:[],
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers:{
    setTimeChart(state,action:PayloadAction<number>){
      state.time = action.payload
    },
    setError(state,action:PayloadAction<IError>){
      const currentIndex = state.errors.findIndex(item => item.time === Math.round(action.payload.time))
      currentIndex !== -1 ? state.errors[currentIndex].error++ : state.errors.push(action.payload) 
    },
    setWordPerMinute(state,action:PayloadAction<number>){
      state.wordsPerMinute.push(action.payload);
    },
    chartReset(state){
      state.errors = [];
      state.wordsPerMinute = [];
    }
  }
})


export const {
  setTimeChart,
  setError,
  setWordPerMinute,
  chartReset,
} = textSlice.actions;

export default textSlice.reducer