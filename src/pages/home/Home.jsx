import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
HeroBanner

const home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
    </div>
  )
}

export default home