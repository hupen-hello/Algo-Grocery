import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';





function Topbar() {
   return (
      <>
        
        <div className="mobile-promotion">
                  <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
               </div>
               <div className="header-top header-top-ptb-1 d-none d-lg-block">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4">
                           <div className="header-info">
                              <ul>
                                 <li><a href="page-about.htlm">About Us</a></li>
                                 <li><a href='page-account.html'>My Account</a></li>
                                 <li><a href='shop-wishlist.html'>Wishlist</a></li>
                                 <li><a href="shop-order.html">Order Tracking</a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                           <div className="text-center">
                              <div id="news-flash" className="d-inline-block">
                                 <ul>
                                    <li>100% Secure delivery without contacting the courier</li>
                                    <li>Supper Value Deals - Save more with coupons</li>
                                    <li>Trendy 25silver jewelry, save up 35% off today</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                           <div className="header-info header-info-right">
                              <ul>
                                 <li>Need help? Call Us: <strong className="text-brand"> + 1800 900</strong></li>
                                 <li>
                                    <a className="language-dropdown-active" href="#">English <FontAwesomeIcon icon={faAngleDown} /></a>
                                    <ul className="language-dropdown">
                                       <li>
                                          <a href="#"><img src="" alt="" />Français</a>
                                       </li>
                                       <li>
                                          <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a>
                                       </li>
                                       <li>
                                          <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a className="language-dropdown-active" href="#">USD <FontAwesomeIcon icon={faAngleDown} /></a>
                                    <ul className="language-dropdown">
                                       <li>
                                          <a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</a>
                                       </li>
                                       <li>
                                          <a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</a>
                                       </li>
                                       <li>
                                          <a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
      </>
   )
}

export default Topbar