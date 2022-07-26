import React, { useEffect } from 'react'
import style from './Timer.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentTime, setIsStart, setTime } from '../../features/TextSlicer'

interface IProps{
  setGameStatus: (val:string)=>void,
}


const Timer: React.FC<IProps> = ({setGameStatus}) => {
  const dispatch = useDispatch()
  const currentTime = useSelector(getCurrentTime)

  useEffect(()=>{
    const hashId = setTimeout(()=>{
      if (currentTime === 0){
        setGameStatus('statistics')
        dispatch(setIsStart(false))
        return ()=> clearTimeout(hashId)
      }
      dispatch(setTime(currentTime-1))
    },1000)
    return ()=> clearTimeout(hashId)
  },[currentTime])

  return (
    <p className={style.time}>{currentTime}</p>
  )
}

export default Timer