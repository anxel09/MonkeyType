import React, { useEffect, useState } from 'react'
import style from './Carret.module.scss'

interface CarretProps{
  gameStart ?: boolean;
  currentIndex : number;
}

const letterSize = 14.4
const wordsPerLine = 69
const strokeInterval = 32

const Carret: React.FC<CarretProps> = ({gameStart = false,currentIndex}) => {
  const [line, setLine] = useState(1)
  useEffect(()=>{
    console.log()
    setLine(Math.floor(currentIndex/wordsPerLine))
  },[currentIndex])

  useEffect(()=>{
    // console.log(line)
  },[line])
  return (
    <div style={ gameStart ? {left:(letterSize * (currentIndex - line * wordsPerLine)), top: 6 + line * strokeInterval} : {} } className={style.carret}></div>
  )
}

export default Carret