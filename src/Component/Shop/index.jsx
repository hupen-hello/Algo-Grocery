import React from 'react'
import Shopproduct from './Shopproduct'
import Topbar from '../Layout/Topbar'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ShopFilter from './ShopFilter'
import Shopwhislist from './Shopwhislist'
import ShopCart from './ShopCart'
import ShopCheckout from './ShopCheckout'
import Invoice from './Invoice'

function Shop() {
  return (
    <>
    <div>
      <Shopproduct/>
      <ShopFilter/>
      <Shopwhislist/>
      <ShopCart/>
      <ShopCheckout/>
      <Invoice/>
    </div>
    </>
  )
}

export default Shop