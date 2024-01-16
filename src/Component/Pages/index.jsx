import React from 'react'
import Header from '../Layout/Header'
import Topbar from '../Layout/Topbar'
import Footer from '../Layout/Footer'
import Aboutus from './Aboutus'
import ContactUS from './ContactUS'
import MyAccount from './MyAccount'
import Login from './Login'
import Register from './Register'
import Forgetpassword from './Forgetpassword'
import Resetpassword from './Resetpassword'
import Purchasedguid from './Purchasedguid'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndCondition from './TermsAndCondition'
import Notfound from './Notfound'

function Pages() {
  return (
    <>
    <Aboutus/>
    <ContactUS/>
    <MyAccount/>
    <Login/>
    <Register/>
    <Forgetpassword/>
    <Resetpassword/>
    <Purchasedguid/>
    <PrivacyPolicy/>
    <TermsAndCondition/>
    <Notfound/>

    
    </>
  )
}

export default Pages