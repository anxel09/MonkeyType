import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GameStatus } from '../../common/types'
import Language from '../../components/Language'
import Speed from '../../components/Speed'
import Text from '../../components/Text'
import Timer from '../../components/Timer'
import { getIsStart } from '../../features/TextSlicer'
import style from './Home.module.scss'

interface IProps{
  setGameStatus: (val:GameStatus)=>void,
  reloadStats: boolean,
  setReloadStats: (val:boolean) => void,
}

const Home: React.FC<IProps> = ({setGameStatus,reloadStats,setReloadStats}) => {

  useEffect(()=>{
    if(reloadStats){
      setReloadStats(false)
    } 
  },[reloadStats])

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
          {
            reloadStats ||
            <Text 
              reloadStats = {reloadStats} 
              setReloadStats = {setReloadStats}
            />

          }
        </div>
      </div>
    </div>
  )
}

export default Home