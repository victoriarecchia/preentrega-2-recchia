import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../layout/footer/Footer'
import { Navbar } from './Navbar/Navbar'

export const Layout = () => {
  return (
    <>
      <Navbar/>
      {/* Outlet hace referencia a los componentes hijos */}
      <Outlet/>
      <Footer/>
    </>
  )
}
