import { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

function RouterLayout() {

  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default RouterLayout
