import React, { useCallback, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setError } from "../../features/ChartSlicer"
import { getCurrentTime, getTime, increaseMistakes, setCountCorrect, setCountOfClicks, setIsStart } from "../../features/TextSlicer"
import { useAppSelector } from "../../hooks/redux"
import { textToLetter } from "../../utils/textToLetter"
import style from "./Text.module.scss"


//Пока на время тут ) 
const text = "With these worksheets your child can think carefully\
about where punctuation goes in a sentence and which type\
of punctuation is best to use in that instance This develops\
both your child s punctuation skills and their ability to form sentences".toLowerCase()


const letters = textToLetter(text)
const Text = () => {
  const dispatch = useDispatch()
  const firstRender = useRef(true)
  const inp = useRef<HTMLInputElement>(null)
  const [inputState,setInputState] = useState<string>('')
  const [indexText, setIndexText] = useState<number>(-1)
  const [incorrect, setIncorrect] = useState<number[]>([])
  const time = useAppSelector(getTime)
  const currentTime = useSelector(getCurrentTime)

  useEffect(()=>{
    inp.current ? inp.current.focus() : null
  },[])

  useEffect(()=>{
    if(!firstRender.current){
      dispatch(setCountOfClicks())
      dispatch(setIsStart(true))
    }
    if (inputState.length <= 0) setIndexText(-1)
    firstRender.current = false
    return ()=> {dispatch(setCountCorrect(inputState.length-incorrect.length))}
  },[inputState])

  useEffect(()=>{

    if (inputState[indexText] !== text[indexText]){
      dispatch( setError({time:time-currentTime, error:1}) )
      dispatch(increaseMistakes())
      setIncorrect(prev =>{
        const lastElement:number|undefined = prev[prev.length-1]
        if(lastElement && (lastElement > indexText)){
          return [...prev.slice(0,-1)]
        }
        return [...prev,indexText]            
      })
    }

  },[indexText])



  function onChangeHandler(e:React.SyntheticEvent<EventTarget>){
    setInputState(prev =>{
      if(prev.length > (e.target as HTMLInputElement).value.length){
        setIncorrect(prev=> prev.filter(item=> item !== indexText))
        setIndexText(prev => prev-1)
        return (e.target as HTMLInputElement).value
      }
      setIndexText(prev=> prev+1)
      return (e.target as HTMLInputElement).value
    })
  }

  const setStylesLetters = useCallback ((index:number):string =>{
    if(index <= indexText){
      if(incorrect.includes(index)){
        
        return style.incorrect
      }
      return style.correct
    }
    return ''
  }, [incorrect,indexText])
  return (
    <>
      <input onChange={onChangeHandler} value={inputState} ref={inp} className={style.inputText} tabIndex={0} type="text" />
      <p className={style.text}>
        {
          letters.map((letter,index) => <span key={index+letter} className={setStylesLetters(index)}>{letter}</span> )
        }
      </p>
    </>
  )
}

export default Text