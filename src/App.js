import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Topbar from './Component/Layout/Topbar';
import './Component/Assets/css/a.css'
import './Component/Assets/css/b.css'
import './Component/Assets/css/c.css'
import './Component/Assets/css/d.css'
import './Component/Assets/css/e.css'
import './Component/Assets/css/f.css'
import './Component/Assets/css/g.css'
import './Component/Assets/css/h.css'
import './Component/Assets/css/i.css'
import './Component/Assets/css/j.css'

import './Component/Assets/js/main.js'
import './Component/Assets/js/a (1).js'
import './Component/Assets/js/a (2).js'
import './Component/Assets/js/a (3).js'
import './Component/Assets/js/a (4).js'
import './Component/Assets/js/a (5).js'
import './Component/Assets/js/a (6).js'
import './Component/Assets/js/a (7).js'
import './Component/Assets/js/a (8).js'
import './Component/Assets/js/a (9).js'
import './Component/Assets/js/a (10).js'
import './Component/Assets/js/a (11).js'
import './Component/Assets/js/a (12).js'
import './Component/Assets/js/a (13).js'
import './Component/Assets/js/a (14).js'
import './Component/Assets/js/a (15).js'
import './Component/Assets/js/a (16).js'
import './Component/Assets/js/a (17).js'
import './Component/Assets/js/a (19).js'
import './Component/Assets/js/a (20).js'
import './Component/Assets/js/a (21).js'
import './Component/Assets/js/a (22).js'
import './Component/Assets/js/a (23).js'
import './Component/Assets/js/a (24).js'
import './Component/Assets/js/a (25).js'
import './Component/Assets/js/a (26).js'
import './Component/Assets/js/a (27).js'
import Footer from './Component/Layout/Footer.jsx';
import Header from './Component/Layout/Header.jsx';
import Home from './Component/Home/index.jsx';
import Contact from './Component/Contact/index.jsx';
import Shop from './Component/Shop/index.jsx';
import Blog from './Component/Blog/index.jsx';
import Pages from './Component/Pages/index.jsx';
import ContactUS from './Component/Contactus/index.jsx';
import Aboutus from './Component/Pages/Aboutus.jsx';
import MyAccount from './Component/Pages/MyAccount.jsx';
import Login from './Component/Pages/Login.jsx';
import Register from './Component/Pages/Register.jsx';
import Forgetpassword from './Component/Pages/Forgetpassword.jsx';
import Resetpassword from './Component/Pages/Resetpassword.jsx';
import Purchasedguid from './Component/Pages/Purchasedguid.jsx';
import PrivacyPolicy from './Component/Pages/PrivacyPolicy.jsx';
import TermsAndCondition from './Component/Pages/TermsAndCondition.jsx';
import Notfound from './Component/Pages/Notfound.jsx';
import Shopproduct from './Component/Shop/Shopproduct.jsx';
import ShopFilter from './Component/Shop/ShopFilter.jsx';
import Shopwhislist from './Component/Shop/Shopwhislist.jsx';
import ShopCart from './Component/Shop/ShopCart.jsx';
import ShopCheckout from './Component/Shop/ShopCheckout.jsx';
import Invoice from './Component/Shop/Invoice.jsx';

function App() {
  return (
    <Router>
    <>
    {/* <Topbar/>
      <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shop/Shopproduct/:p_id" element={<Shopproduct />} />
        <Route path="/Shop/ShopFilter" element={<ShopFilter />} />
        <Route path="/Shop/Shopwhislist" element={<Shopwhislist />} />
        <Route path="/Shop/ShopCart" element={<ShopCart />} />
        <Route path="/Shop/ShopCheckout" element={<ShopCheckout />} />
        <Route path="/Shop/Invoice" element={<Invoice />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Pages/Aboutus" element={<Aboutus/>} />
        <Route path="/Pages/ContactUS" element={<ContactUS/>} />
        <Route path="/Pages/MyAccount" element={<MyAccount/>} />
        <Route path="/Pages/Login" element={<Login/>} />
        <Route path="/Pages/Register" element={<Register/>} />
        <Route path="/Pages/Forgetpassword" element={<Forgetpassword/>} />
        <Route path="/Pages/Resetpassword" element={<Resetpassword/>} />
        <Route path="/Pages/Purchasedguid" element={<Purchasedguid/>} />
        <Route path="/Pages/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/Pages/TermsAndCondition" element={<TermsAndCondition/>} />
        <Route path="/Pages/Notfound" element={<Notfound/>} />
        
        <Route path="/Contactus" element={<ContactUS />} />
      </Routes>
      <Footer/>
    </>
   </Router>



  //   {/* <Home/>  */}
  //  {/* <Contact/> */}
  //  {/* <Shop/> */}
  //  {/* <Blog/> */}
  //  {/* <Pages/> */}
  //  {/* <ContactUS/> */}

   
   
   
   
  );
}

export default App;






{/* <Topbar />
      <Header />
      <Footer /> */}
