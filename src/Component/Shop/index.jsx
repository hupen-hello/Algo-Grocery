import React from 'react'
import Shopproduct from './Shopproduct'
import Topbar from '../Layout/Topbar'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Shop() {
  return (
    <>
    <div>
      <Topbar/>
      <Header/>
      <Shopproduct/>
      <Footer/>
    </div>
    </>
  )
}

export default Shop