import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../layout/footer/Footer'
import { NavBar } from './Navbar/Navbar'


export const Layout = () => {
  return (
    <>
      <NavBar/>
      {/* Outlet hace referencia a los componentes hijos */}
      <Outlet/>
      <Footer/>
    </>
  )
}
