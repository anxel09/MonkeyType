import React from "react"
import { GameStatus } from "../../common/types";
import Mode from "../Mode"
import Navigation from "../Navigation"
import style from "./Header.module.scss"

interface IHeader{
  setStatus: (status:GameStatus)=>void;
  setReloadStats: (val:boolean) => void,
}


const Header:React.FC<IHeader>= ({setStatus,setReloadStats}) => {
  return (
    <div className="container">
      <header className={style.header}>
        <div className={style.leftSide}>
          <Navigation setStatus={setStatus} setReloadStats={setReloadStats}/>
        </div>
        <div className={style.rightSide}>
          <Mode />
        </div>
      </header>
    </div>
  )
}

export default Header
