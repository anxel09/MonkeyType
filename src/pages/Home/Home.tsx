import React from 'react'
import Language from '../../components/Language'
import Speed from '../../components/Speed'
import Text from '../../components/Text'
import style from './Home.module.scss'

const Home = () => {
  return (
    <div className='container'>
      <div className={style.main}>
        <div className="modes">
          <Language />
          <Speed />
        </div>
        <div className="text">
          <Text />
        </div>
      </div>
    </div>
  )
}

export default Home