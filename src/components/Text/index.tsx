import React, { useEffect, useRef, useState } from "react"
import { textToLetter } from "../../utils/textToLetter"
import style from "./Text.module.scss"

const text = "With these worksheets your child can think carefully\
about where punctuation goes in a sentence and which type\
of punctuation is best to use in that instance This develops\
both your child s punctuation skills and their ability to form sentences".toLowerCase()


const letters = textToLetter(text)
const Text = () => {
  const inp = useRef<HTMLInputElement>(null)
  const [inputState,setInputState] = useState<string>('')
  const [indexText, setIndexText] = useState<number>(-1)
  const [incorrect, setIncorrect] = useState<number[]>([])

  useEffect(()=>{
    inp.current ? inp.current.focus() : null
  },[])

  useEffect(()=>{
    if (inputState.length <= 0) setIndexText(-1)
  },[inputState])

  useEffect(()=>{

    if (inputState[indexText] !== text[indexText]){
      setIncorrect(prev =>{
        const lastElement:number|undefined = prev[prev.length-1]
        if(lastElement && (lastElement > indexText)){
          return [...prev.slice(0,-1)]
        }
        return [...prev,indexText]            
      })
    }

  },[indexText])


  function setStylesLetters(index:number):string{
    if(index <= indexText){
      return incorrect.includes(index) ? style.incorrect : style.correct
    }
    return ''
  }

  function onChangeHandle(e:any){
    setInputState(prev =>{
      if(prev.length > e.target.value.length){
        setIncorrect(prev=> prev.filter(item=> item !== indexText))
        setIndexText(prev => prev-1)
        return e.target.value
      }
      setIndexText(prev=> prev+1)
      return e.target.value
    })
  }

  // useEffect(()=>{
  //   console.log('indexText: '+indexText)
  // },[indexText])

  // useEffect(()=>{
  //   console.log('Incorrect '+incorrect)
  // },[incorrect])

  return (
    <>
      <input onChange={onChangeHandle} value={inputState} ref={inp} className={style.inputText} tabIndex={0} type="text" />
      <p>
        {
          letters.map((letter,index) => <span key={index+letter} className={setStylesLetters(index)}>{letter}</span> )
        }
      </p>
    </>
  )
}

export default Text