import React, { useState,useEffect } from 'react'
import { setTime } from '../../features/TextSlicer'
import { useAppDispatch } from '../../hooks/redux'
import style  from './Mode.module.scss'


const grammars:string[] = ["punctuation", "numbers"]
const modes:string[] = ["time", "words", "quote", "zen", "custom"]
const times:number[] = [15,30,60,120]


const Mode: React.FC = () => {
  const dispatch = useAppDispatch()
  const [activeGrammar, setActiveGrammar] = useState<string[]>([])
  const [activeMode, setActiveMode] = useState<number>(0)
  const [activeTime, setActiveTime] = useState<number>(0)


  useEffect(()=>{
    dispatch(setTime(times[activeTime]))
  },[activeTime])


  function handleGrammarClick(grammar:string){
    setActiveGrammar(prev=>{
      if (prev.length < 1) return [grammar]
      const isNew = prev.indexOf(grammar)
      return isNew === -1 ? [...prev, grammar] : prev.filter(item => item !== grammar)
    })
  }


  function handleModeClick(i:number){
    setActiveMode(i);
  }

  function handleTimeClick(i:number){
    setActiveTime(i)
  }

  function setStyleGrammar(grammar:string){
    return activeGrammar.find(item=> item === grammar) ? style.active : ''
  }

  return (
    <div className='mode'>
        <div className={style.grammars}>
          {grammars.map((grammar,i) => <div onClick={()=>handleGrammarClick(grammar)} className={setStyleGrammar(grammar)} key={grammar}>{grammar}</div> )}
        </div>
        <div className={style.modes}>
          {modes.map((mode,i) => <div onClick={()=>handleModeClick(i)} className={i=== activeMode ? style.active : ""} key={mode}>{mode}</div> )}
        </div>
        <div className={style.times}>
          {times.map((time,i) => <div onClick={()=>handleTimeClick(i)} className={i=== activeTime ? style.active : ""} key={time}>{time}</div> )}
        </div>
    </div>
  )
}

export default Mode