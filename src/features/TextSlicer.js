import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const getCountMistakes = (state) => state.text.mistakes;
export const getCurrentTime = (state) => state.text.currentTime
export const getCountOfClicks = (state) => state.text.countOfClicks
export const getIsStart = (state) => state.text.isStart
export const getCountOfCharacter = (state) => state.text.countOfCharacter
export const getTime = (state) => state.text.time
export const getCountCorrect = (state) => state.text.countCorrectCharacters

export const {
  increaseMistakes,
  setTime,
  setCountOfClicks,
  setIsStart,
  setCountOfCharacter,
  setCountCorrect,
} = textSlice.actions;

export default textSlice.reducer