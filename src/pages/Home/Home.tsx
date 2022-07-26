import React, { MutableRefObject, useState } from 'react'
import { useSelector } from 'react-redux'
import Language from '../../components/Language'
import Speed from '../../components/Speed'
import Text from '../../components/Text'
import Timer from '../../components/Timer'
import { getIsStart } from '../../features/TextSlicer'
import style from './Home.module.scss'

interface IProps{
  setGameStatus: (val:string)=>void,
}

const Home: React.FC<IProps> = ({setGameStatus}) => {
  const isStart = useSelector(getIsStart)
  return (
    <div className='container'>
      <div className={style.main}>
        <div className={style.modes}>
          {
            isStart ?
               <Timer setGameStatus = {setGameStatus}/> 
             :
             <>
                  <Language />
                  <Speed />
             </>
          }
        </div>
        <div className={style.text}>
          <Text />
        </div>
      </div>
    </div>
  )
}

export default Home