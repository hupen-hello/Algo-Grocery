import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





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
                                 <li><Link to="page-about.htlm">About Us</Link></li>
                                 <li><Link to='page-account.html'>My Account</Link></li>
                                 <li><Link to='shop-wishlist.html'>Wishlist</Link></li>
                                 <li><Link to="shop-order.html">Order Tracking</Link></li>
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
                                    <Link className="language-dropdown-active" to="#">English <FontAwesomeIcon icon={faAngleDown} /></Link>
                                    <ul className="language-dropdown">
                                       <li>
                                          <Link to="#"><img src="" alt="" />Français</Link>
                                       </li>
                                       <li>
                                          <Link to="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</Link>
                                       </li>
                                       <li>
                                          <Link to="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</Link>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link className="language-dropdown-active" to="#">USD <FontAwesomeIcon icon={faAngleDown} /></Link>
                                    <ul className="language-dropdown">
                                       <li>
                                          <Link to="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</Link>
                                       </li>
                                       <li>
                                          <Link to="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</Link>
                                       </li>
                                       <li>
                                          <Link to="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</Link>
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