import React from 'react'
import Hero from '../../components/Hero/Hero'
import SelectBook from '../../components/SelectBook/SelectBook'
import AboutUs from '../../components/AboutUs/AboutUs'

function HomePage() {
  return (
    <div>
        <Hero/>
        <SelectBook/>
        <AboutUs/>
    </div>
  )
}

export default HomePage