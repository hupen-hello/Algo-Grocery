import React from 'react'
import Homemain from './Homemain'
import Topbar from '../Layout/Topbar'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Homemain />
      <Footer />
    </div>
  )
}

export default Home