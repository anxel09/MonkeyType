import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface ITExt{
  isStart:boolean,
  mistakes: number,
  time: number,
  currentTime:number,
  countOfClicks:number,
  countOfCharacter:number,
  countCorrectCharacters:number,
}


const initialState:ITExt = {
  isStart: false,
  mistakes: 0,
  time:5,
  currentTime:5,
  countOfClicks:0,
  countOfCharacter: 0,
  countCorrectCharacters: 0,
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers:{
    increaseMistakes(state){
      state.mistakes++;
    },
    setTime(state,action){
      state.currentTime = action.payload
    },
    setCountOfClicks(state){
      state.countOfClicks+=1
    },
    setIsStart(state, action){
      state.isStart = action.payload
    },
    setCountOfCharacter(state,action){
      state.countOfCharacter = action.payload
    },
    setCountCorrect(state, action){
      state.countCorrectCharacters = action.payload
    }
  }
})

export const getCountMistakes = (state:RootState) => state.text.mistakes;
export const getCurrentTime = (state:RootState) => state.text.currentTime
export const getCountOfClicks = (state:RootState) => state.text.countOfClicks
export const getIsStart = (state:RootState) => state.text.isStart
export const getCountOfCharacter = (state:RootState) => state.text.countOfCharacter
export const getTime = (state:RootState) => state.text.time
export const getCountCorrect = (state:RootState) => state.text.countCorrectCharacters

export const {
  increaseMistakes,
  setTime,
  setCountOfClicks,
  setIsStart,
  setCountOfCharacter,
  setCountCorrect,
} = textSlice.actions;

export default textSlice.reducer