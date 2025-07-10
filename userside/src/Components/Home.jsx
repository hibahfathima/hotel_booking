import React from 'react'
import MainView from './MainView'
import FeaturedDestination from './FeaturedDestination'
import ExclusiveOffers from './ExclusiveOffers'
import Testmonial from './Testmonial'
import NewsLetter from './NewsLetter'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <MainView/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testmonial/>
      <div className='flex justify-center'>
 <NewsLetter/>
      </div>
     
     
    </div>
  )
}

export default Home
