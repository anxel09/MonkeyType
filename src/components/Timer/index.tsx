import React, { useEffect } from 'react'
import style from './Timer.module.scss'
// import { useAppDispatch, useAppSelector } from 'react-redux'
import {  getCurrentTime, getTime, setIsStart, setTime } from '../../features/TextSlicer'
import { setTimeChart, setWordPerMinute } from "../../features/ChartSlicer"
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { WordsPerMinute } from '../../utils/Wpm'
interface ITimer{
  setGameStatus: (val:string)=>void,
}


const Timer: React.FC<ITimer> = ({setGameStatus}) => {
  const dispatch = useAppDispatch()
  const currentTime = useAppSelector(getCurrentTime)

  const mistakes = useAppSelector(state => state.text.mistakes)
  const correctCharacter = useAppSelector(state => state.text.countCorrectCharacters)
  const countCharacter = mistakes+correctCharacter
  const time = useAppSelector(getTime)

  useEffect(()=>{
    const hashId = setTimeout(()=>{
      if (currentTime === 0){
        setGameStatus('statistics')
        dispatch(setIsStart(false))
        dispatch( setWordPerMinute(WordsPerMinute(time-currentTime, countCharacter)) )
        return ()=> clearTimeout(hashId)
      }
      dispatch( setWordPerMinute(WordsPerMinute(time-currentTime, countCharacter)) )
      dispatch(setTime(currentTime-1))
      dispatch( setTimeChart( currentTime+1 ) )
    },1000)
    return ()=> clearTimeout(hashId)
  },[currentTime])

  return (
    <p className={style.time}>{currentTime}</p>
  )
}

export default Timer