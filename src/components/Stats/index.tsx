import React from 'react'
import style from './Stats.module.scss'
import { useSelector } from 'react-redux'
import {  getCountCorrect, getCountMistakes, getCountOfCharacter, getCountOfClicks, getTime } from '../../features/TextSlicer'
import { useAppSelector } from '../../hooks/redux'

const Stats = () => {
  const time = useSelector(getTime)
  const mistakes = useSelector(getCountMistakes)
  const countOfCharacters = useSelector(getCountOfCharacter)
  const countOfClicks = useSelector(getCountOfClicks)
  const correct = useSelector(getCountCorrect)
  return (
    <div>
      <ul className={style.list}>
        <li>Time: {time}</li>
        <li>Mistakes: {mistakes}</li>
        <li>CountOfCharacters: {countOfCharacters}</li>
        <li>CountOfClicks: {countOfClicks}</li>
        <li>Correct: {correct}</li>
      </ul>
    </div>
  )
}

export default Stats