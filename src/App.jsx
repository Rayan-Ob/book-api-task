import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/MainLayout/MainLayout'
import { Routes, Route } from 'react-router'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import { BrowserRouter } from 'react-router-dom'


function App() {

  return (
    <>
      <MainLayout>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} ></Route>
            <Route path='/details/:id' element={<DetailsPage />}></Route>
          </Routes>
        </BrowserRouter>

      </MainLayout>
    </>
  )
}

export default App
