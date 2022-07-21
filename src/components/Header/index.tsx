import React from "react"
import Mode from "../Mode"
import Navigation from "../Navigation"
import style from "./Header.module.scss"


const Header = () => {
  return (
    <div className="container">
      <header className={style.header}>
        <div className={style.leftSide}>
          <Navigation />
        </div>
        <div className={style.rightSide}>
          <Mode />
        </div>
      </header>
    </div>
  )
}

export default Header
