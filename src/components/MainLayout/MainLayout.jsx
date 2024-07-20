import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function MainLayout(props) {
  return (
    <div>

        <Navbar/>
        {props.children}
        <Footer/>
        </div>
  )
}

export default MainLayout