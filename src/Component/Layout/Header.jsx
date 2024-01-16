import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import '../Assets/css/main.css'
import Logo from '../Assets/imgs/theme/logo.svg'
import Compareimg from '../Assets/imgs/theme/icons/icon-compare.svg'
import cartimg from '../Assets/imgs/theme/icons/icon-heart.svg'
import Whisimg from '../Assets/imgs/theme/icons/icon-cart.svg'
import Accimg from '../Assets/imgs/theme/icons/icon-user.svg'
import Hotimg from '../Assets/imgs/theme/icons/icon-hot-white.svg'
import Hotline from '../Assets/imgs/theme/icons/icon-headphone-white.svg'
import Dontimg from '../Assets/imgs/banner/banner-menu.png'
import Topbar from './Topbar';

function Header() {
  return (

    <>
    <div>
    <header className="header-area header-style-1 header-style-5 header-height-2">
               <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                  <div className="container">
                     <div className="header-wrap">
                        <div className="logo logo-width-1">
                           <Link to='/'><img src={Logo} alt="logo" /></Link>
                        </div>
                        <div className="header-right">
                           <div className="search-style-2">
                              <form action="#">
                                 <select className="select-active">
                                    <option>All Categories</option>
                                    <option>Milks and Dairies</option>
                                    <option>Wines & Alcohol</option>
                                    <option>Clothing & Beauty</option>
                                    <option>Pet Foods & Toy</option>
                                    <option>Fast food</option>
                                    <option>Baking material</option>
                                    <option>Vegetables</option>
                                    <option>Fresh Seafood</option>
                                    <option>Noodles & Rice</option>
                                    <option>Ice cream</option>
                                 </select>
                                 <input type="text" placeholder="Search for items..." />
                              </form>
                           </div>
                           <div className="header-action-right">
                              <div className="header-action-2">
                                 <div className="search-location">
                                    <form action="#">
                                       <select className="select-active">
                                          <option>Your Location</option>
                                          <option>Alabama</option>
                                          <option>Alaska</option>
                                          <option>Arizona</option>
                                          <option>Delaware</option>
                                          <option>Florida</option>
                                          <option>Georgia</option>
                                          <option>Hawaii</option>
                                          <option>Indiana</option>
                                          <option>Maryland</option>
                                          <option>Nevada</option>
                                          <option>New Jersey</option>
                                          <option>New Mexico</option>
                                          <option>New York</option>
                                       </select>
                                    </form>
                                 </div>
                                 <div className="header-action-icon-2">
                                    <Link to='shop-compare.html'>
                                       <img className="svgInject" alt="Nest" src={Compareimg} />
                                       <span className="pro-count blue">3</span>
                                    </Link>
                                    <Link to='shop-compare.html'><span className="lable ml-0">Compare</span></Link>
                                 </div>
                                 <div className="header-action-icon-2">
                                    <Link to='shop-wishlist.html'>
                                       <img className="svgInject" alt="Nest" src={Whisimg} />
                                       <span className="pro-count blue">6</span>
                                    </Link>
                                    <Link to='shop-wishlist.html'><span className="lable">Wishlist</span></Link>
                                 </div>
                                 <div className="header-action-icon-2">
                                    <Link className='mini-cart-icon' to='shop-cart.html'>
                                       <img alt="Nest" src={cartimg} />
                                       <span className="pro-count blue">2</span>
                                    </Link>
                                    <Link to='shop-cart.html'><span className="lable">Cart</span></Link>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                       <ul>
                                          <li>
                                             <div className="shopping-cart-img">
                                                <Link to='shop-product-right.html'><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></Link>
                                             </div>
                                             <div className="shopping-cart-title">
                                                <h4><Link to='shop-product-right.html'>Daisy Casual Bag</Link></h4>
                                                <h4><span>1 × </span>$800.00</h4>
                                             </div>
                                             <div className="shopping-cart-delete">
                                                <Link to="#"><i className="fi-rs-cross-small"></i></Link>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="shopping-cart-img">
                                                <Link to='shop-product-right.html'><img alt="Nest" src="assets/imgs/shop/thumbnail-2.jpg" /></Link>
                                             </div>
                                             <div className="shopping-cart-title">
                                                <h4><Link to='shop-product-right.html'>Corduroy Shirts</Link></h4>
                                                <h4><span>1 × </span>$3200.00</h4>
                                             </div>
                                             <div className="shopping-cart-delete">
                                                <Link to="#"><i className="fi-rs-cross-small"></i></Link>
                                             </div>
                                          </li>
                                       </ul>
                                       <div className="shopping-cart-footer">
                                          <div className="shopping-cart-total">
                                             <h4>Total <span>$4000.00</span></h4>
                                          </div>
                                          <div className="shopping-cart-button">
                                             <Link className='outline' to='shop-cart.html'>View cart</Link>
                                             <Link to='shop-checkout.html'>Checkout</Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="header-action-icon-2">
                                    <Link to='page-account.html'>
                                       <img className="svgInject" alt="Nest" src={Accimg} />
                                    </Link>
                                    <Link to='page-account.html'><span className="lable ml-0">Account</span></Link>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                       <ul>
                                          <li>
                                             <Link to='page-account.html'><i className="fi fi-rs-user mr-10"></i>My Account</Link>
                                          </li>
                                          <li>
                                             <Link to='page-account.html'><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</Link>
                                          </li>
                                          <li>
                                             <Link to='page-account.html'><i className="fi fi-rs-label mr-10"></i>My Voucher</Link>
                                          </li>
                                          <li>
                                             <Link to='shop-wishlist.html'><i className="fi fi-rs-heart mr-10"></i>My Wishlist</Link>
                                          </li>
                                          <li>
                                             <Link to='page-account.html'><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</Link>
                                          </li>
                                          <li>
                                             <Link to='page-login.html'><i className="fi fi-rs-sign-out mr-10"></i>Sign out</Link>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="header-bottom header-bottom-bg-color sticky-bar">
                  <div className="container">
                     <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                           <Link to='index.htm'><img src={Logo} alt="logo" /></Link>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                           <div className="main-categori-wrap d-none d-lg-block">
                              <Link className="categories-button-active" to="#">
                                 <span className="fi-rs-apps"></span> <span className="et">Trending</span> Categories
                                 <FontAwesomeIcon icon={faAngleDown} />
                              </Link>
                              <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading">
                                 <div className="d-flex categori-dropdown-inner">
                                    <ul>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-1.svg" alt="" />Milks and Dairies</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-2.svg" alt="" />Clothing & beauty</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-3.svg" alt="" />Pet Foods & Toy</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-4.svg" alt="" />Baking material</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-5.svg" alt="" />Fresh Fruit</Link>
                                       </li>
                                    </ul>
                                    <ul className="end">
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-6.svg" alt="" />Wines & Drinks</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-7.svg" alt="" />Fresh Seafood</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-8.svg" alt="" />Fast food</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-9.svg" alt="" />Vegetables</Link>
                                       </li>
                                       <li>
                                          <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/category-10.svg" alt="" />Bread and Juice</Link>
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="more_slide_open" sx="display: none">
                                    <div className="d-flex categori-dropdown-inner">
                                       <ul>
                                          <li>
                                             <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />Milks and Dairies</Link>
                                          </li>
                                          <li>
                                             <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />Clothing & beauty</Link>
                                          </li>
                                       </ul>
                                       <ul className="end">
                                          <li>
                                             <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />Wines & Drinks</Link>
                                          </li>
                                          <li>
                                             <Link to='shop-grid-right.html'> <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />Fresh Seafood</Link>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="more_categories"><span className="icon"></span> <span className="heading-sm-1">Show more...</span></div>
                              </div>
                           </div>
                           <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                              <nav>
                                 <ul>
                                    <li className="hot-deals"><img src={Hotimg} alt="hot deals" /><Link to='shop-grid-right.html'>Deals</Link></li>
                                    <li>
                                       <Link className='active' to='/'>Home </Link>
                                       
                                    </li>
                                    <li>
                                       <Link to="/Contact">About</Link>
                                    </li>
                                    <li>
                                       <Link to='/Shop'>Shop <FontAwesomeIcon icon={faAngleDown} /></Link>
                                       <ul className="sub-menu">
                                          
                                          <li>
                                             <Link to="/Shop/Shopproduct">Single Product <i className="fi-rs-angle-right"></i></Link>
                                             
                                          </li>
                                          <li><Link to="/Shop/ShopFilter">Shop – Filter</Link></li>
                                          <li><Link to="/Shop/Shopwhislist">Shop – Wishlist</Link></li>
                                          <li><Link to="/Shop/ShopCart">Shop – Cart</Link></li>
                                          <li><Link to="/Shop/ShopCheckout">Shop – Checkout</Link></li>
                                          <li>
                                             <Link to="/Shop/Invoice">Shop Invoice<i className="fi-rs-angle-right"></i></Link>
                                             
                                          </li>
                                       </ul>
                                    </li>
                                   
                                    <li className="position-static">
                                       <Link to="#">Mega menu <FontAwesomeIcon icon={faAngleDown} /></Link>
                                       <ul className="mega-menu">
                                          <li className="sub-mega-menu sub-mega-menu-width-22">
                                             <Link className="menu-title" to="#">Fruit & Vegetables</Link>
                                             <ul>
                                                <li><Link to='shop-product-right.html'>Meat & Poultry</Link></li>
                                                <li><Link to='shop-product-right.html'>Fresh Vegetables</Link></li>
                                                <li><Link to='shop-product-right.html'>Herbs & Seasonings</Link></li>
                                                <li><Link to='shop-product-right.html'>Cuts & Sprouts</Link></li>
                                                <li><Link to='shop-product-right.html'>Exotic Fruits & Veggies</Link></li>
                                                <li><Link to='shop-product-right.html'>Packaged Produce</Link></li>
                                             </ul>
                                          </li>
                                          <li className="sub-mega-menu sub-mega-menu-width-22">
                                             <Link className="menu-title" to="#">Breakfast & Dairy</Link>
                                             <ul>
                                                <li><Link to='shop-product-right.html'>Milk & Flavoured Milk</Link></li>
                                                <li><Link to='shop-product-right.html'>Butter and Margarine</Link></li>
                                                <li><Link to='shop-product-right.html'>Eggs Substitutes</Link></li>
                                                <li><Link to='shop-product-right.html'>Marmalades</Link></li>
                                                <li><Link to='shop-product-right.html'>Sour Cream</Link></li>
                                                <li><Link to='shop-product-right.html'>Cheese</Link></li>
                                             </ul>
                                          </li>
                                          <li className="sub-mega-menu sub-mega-menu-width-22">
                                             <Link className="menu-title" to="#">Meat & Seafood</Link>
                                             <ul>
                                                <li><Link to='shop-product-right.html'>Breakfast Sausage</Link></li>
                                                <li><Link to='shop-product-right.html'>Dinner Sausage</Link></li>
                                                <li><Link to='shop-product-right.html'>Chicken</Link></li>
                                                <li><Link to='shop-product-right.html'>Sliced Deli Meat</Link></li>
                                                <li><Link to='shop-product-right.html'>Wild Caught Fillets</Link></li>
                                                <li><Link to='shop-product-right.html'>Crab and Shellfish</Link></li>
                                             </ul>
                                          </li>
                                          <li className="sub-mega-menu sub-mega-menu-width-34">
                                             <div className="menu-banner-wrap">
                                                <Link to='shop-product-right.html'><img src={Dontimg} alt="Nest" /></Link>
                                                <div className="menu-banner-content">
                                                   <h4>Hot deals</h4>
                                                   <h3>
                                                      Don't miss<br />
                                                      Trending
                                                   </h3>
                                                   <div className="menu-banner-price">
                                                      <span className="new-price text-success">Save to 50%</span>
                                                   </div>
                                                   <div className="menu-banner-btn">
                                                      <Link to='shop-product-right.html'>Shop now</Link>
                                                   </div>
                                                </div>
                                                <div className="menu-banner-discount">
                                                   <h3>
                                                      <span>25%</span>
                                                      off
                                                   </h3>
                                                </div>
                                             </div>
                                          </li>
                                       </ul>
                                    </li>
                                    <li>
                                       <Link to="/Blog">Blog </Link>
                                       
                                    </li>
                                    <li>
                                       <Link to="/Pages">Pages <FontAwesomeIcon icon={faAngleDown} /></Link>
                                       <ul className="sub-menu">
                                          <li><Link to="/Pages/Aboutus">About Us</Link></li>
                                          <li><Link to="/Pages/ContactUS">Contact</Link></li>
                                          <li><Link to="/Pages/MyAccount">My Account</Link></li>
                                          <li><Link to="/Pages/Login">Login</Link></li>
                                          <li><Link to="/Pages/Register">Register</Link></li>
                                          <li><Link to="/Pages/Forgetpassword">Forgot password</Link></li>
                                          <li><Link to="/Pages/Resetpassword">Reset password</Link></li>
                                          <li><Link to="/Pages/Purchasedguid">Purchase Guide</Link></li>
                                          <li><Link to="/Pages/PrivacyPolicy">Privacy Policy</Link></li>
                                          <li><Link to="/Pages/TermsAndCondition">Terms of Service</Link></li>
                                          <li><Link to="/Pages/Notfound">404 Page</Link></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <Link to="/Contactus">Contact</Link>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                        </div>
                        <div className="hotline d-none d-lg-flex">
                           <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                           <p>1900 - 888<span>24/7 Support Center</span></p>
                        </div>
                        <div className="header-action-icon-2 d-block d-lg-none">
                           <div className="burger-icon burger-icon-white">
                              <span className="burger-icon-top"></span>
                              <span className="burger-icon-mid"></span>
                              <span className="burger-icon-bottom"></span>
                           </div>
                        </div>
                        <div className="header-action-right d-block d-lg-none">
                           <div className="header-action-2">
                              <div className="header-action-icon-2">
                                 <Link to='shop-wishlist.html'>
                                    <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                                    <span className="pro-count white">4</span>
                                 </Link>
                              </div>
                              <div className="header-action-icon-2">
                                 <Link className="mini-cart-icon" to="#">
                                    <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                                    <span className="pro-count white">2</span>
                                 </Link>
                                 <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                       <li>
                                          <div className="shopping-cart-img">
                                             <Link to='shop-product-right.html'><img alt="Nest" src="assets/imgs/shop/thumbnail-3.jpg" /></Link>
                                          </div>
                                          <div className="shopping-cart-title">
                                             <h4><Link to='shop-product-right.html'>Plain Striola Shirts</Link></h4>
                                             <h3><span>1 × </span>$800.00</h3>
                                          </div>
                                          <div className="shopping-cart-delete">
                                             <Link to="#"><i className="fi-rs-cross-small"></i></Link>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="shopping-cart-img">
                                             <Link to='shop-product-right.html'><img alt="Nest" src="assets/imgs/shop/thumbnail-4.jpg" /></Link>
                                          </div>
                                          <div className="shopping-cart-title">
                                             <h4><Link to='shop-product-right.html'>Macbook Pro 2022</Link></h4>
                                             <h3><span>1 × </span>$3500.00</h3>
                                          </div>
                                          <div className="shopping-cart-delete">
                                             <Link to="#"><i className="fi-rs-cross-small"></i></Link>
                                          </div>
                                       </li>
                                    </ul>
                                    <div className="shopping-cart-footer">
                                       <div className="shopping-cart-total">
                                          <h4>Total <span>$383.00</span></h4>
                                       </div>
                                       <div className="shopping-cart-button">
                                          <Link to='shop-cart.html'>View cart</Link>
                                          <Link to='shop-checkout.html'>Checkout</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <div className="mobile-header-active mobile-header-wrapper-style">
               <div className="mobile-header-wrapper-inner">
                  <div className="mobile-header-top">
                     <div className="mobile-header-logo">
                        <Link to="index.htm">
                           <img src="assets/imgs/theme/logo.svg" alt="logo" />
                        </Link>
                     </div>
                     <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                        <button className="close-style search-close">
                           <i className="icon-top" />
                           <i className="icon-bottom" />
                        </button>
                     </div>
                  </div>
                  <div className="mobile-header-content-area">
                     <div className="mobile-search search-style-3 mobile-header-border">
                        <form action="#">
                           <input type="text" placeholder="Search for items…" />
                           <button type="submit">
                              <i className="fi-rs-search" />
                           </button>
                        </form>
                     </div>
                     <div className="mobile-menu-wrap mobile-header-border">
                        {/* mobile menu start */}
                        <nav>
                           <ul className="mobile-menu font-heading">
                              <li className="menu-item-has-children">
                                 <Link to="index.htm">Home</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="index.htm">Home 1</Link>
                                    </li>
                                    <li>
                                       <Link to="index-2.html">Home 2</Link>
                                    </li>
                                    <li>
                                       <Link to="index-3.html">Home 3</Link>
                                    </li>
                                    <li>
                                       <Link to="index-4.html">Home 4</Link>
                                    </li>
                                    <li>
                                       <Link to="index-5.html">Home 5</Link>
                                    </li>
                                    <li>
                                       <Link to="index-6.html">Home 6</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="shop-grid-right.html">shop</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="shop-grid-right.html">Shop Grid – Right Sidebar</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-grid-left.html">Shop Grid – Left Sidebar</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-list-right.html">Shop List – Right Sidebar</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-list-left.html">Shop List – Left Sidebar</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-fullwidth.html">Shop - Wide</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <Link to="#">Single Product</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="shop-product-right.html">
                                                Product – Right Sidebar
                                             </Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-left.html">
                                                Product – Left Sidebar
                                             </Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-full.html">Product – No sidebar</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-vendor.html">
                                                Product – Vendor Infor
                                             </Link>
                                          </li>
                                       </ul>
                                    </li>
                                    <li>
                                       <Link to="shop-filter.html">Shop – Filter</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-wishlist.html">Shop – Wishlist</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-cart.html">Shop – Cart</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-checkout.html">Shop – Checkout</Link>
                                    </li>
                                    <li>
                                       <Link to="shop-compare.html">Shop – Compare</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <Link to="#">Shop Invoice</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="shop-invoice-1.html">Shop Invoice 1</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-invoice-2.html">Shop Invoice 2</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-invoice-3.html">Shop Invoice 3</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-invoice-4.html">Shop Invoice 4</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-invoice-5.html">Shop Invoice 5</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-invoice-6.html">Shop Invoice 6</Link>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="#">Vendors</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="vendors-grid.html">Vendors Grid</Link>
                                    </li>
                                    <li>
                                       <Link to="vendors-list.html">Vendors List</Link>
                                    </li>
                                    <li>
                                       <Link to="vendor-details-1.html">Vendor Details 01</Link>
                                    </li>
                                    <li>
                                       <Link to="vendor-details-2.html">Vendor Details 02</Link>
                                    </li>
                                    <li>
                                       <Link to="vendor-dashboard.html">Vendor Dashboard</Link>
                                    </li>
                                    <li>
                                       <Link to="vendor-guide.html">Vendor Guide</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="#">Mega menu</Link>
                                 <ul className="dropdown">
                                    <li className="menu-item-has-children">
                                       <Link to="#">Women's Fashion</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="shop-product-right.html">Dresses</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Blouses &amp; Shirts</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">
                                                Hoodies &amp; Sweatshirts
                                             </Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Women's Sets</Link>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <Link to="#">Men's Fashion</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="shop-product-right.html">Jackets</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Casual Faux Leather</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Genuine Leather</Link>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <Link to="#">Technology</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="shop-product-right.html">Gaming Laptops</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Ultraslim Laptops</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Tablets</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Laptop Accessories</Link>
                                          </li>
                                          <li>
                                             <Link to="shop-product-right.html">Tablet Accessories</Link>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="blog-category-fullwidth.html">Blog</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="blog-category-grid.html">Blog Category Grid</Link>
                                    </li>
                                    <li>
                                       <Link to="blog-category-list.html">Blog Category List</Link>
                                    </li>
                                    <li>
                                       <Link to="blog-category-big.html">Blog Category Big</Link>
                                    </li>
                                    <li>
                                       <Link to="blog-category-fullwidth.html">Blog Category Wide</Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                       <Link to="#">Single Product Layout</Link>
                                       <ul className="dropdown">
                                          <li>
                                             <Link to="blog-post-left.html">Left Sidebar</Link>
                                          </li>
                                          <li>
                                             <Link to="blog-post-right.html">Right Sidebar</Link>
                                          </li>
                                          <li>
                                             <Link to="blog-post-fullwidth.html">No Sidebar</Link>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="#">Pages</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="page-about.html">About Us</Link>
                                    </li>
                                    <li>
                                       <Link to="page-contact.html">Contact</Link>
                                    </li>
                                    <li>
                                       <Link to="page-account.html">My Account</Link>
                                    </li>
                                    <li>
                                       <Link to="page-login.html">Login</Link>
                                    </li>
                                    <li>
                                       <Link to="page-register.html">Register</Link>
                                    </li>
                                    <li>
                                       <Link to="page-forgot-password.html">Forgot password</Link>
                                    </li>
                                    <li>
                                       <Link to="page-reset-password.html">Reset password</Link>
                                    </li>
                                    <li>
                                       <Link to="page-purchase-guide.html">Purchase Guide</Link>
                                    </li>
                                    <li>
                                       <Link to="page-privacy-policy.html">Privacy Policy</Link>
                                    </li>
                                    <li>
                                       <Link to="page-terms.html">Terms of Service</Link>
                                    </li>
                                    <li>
                                       <Link to="page-404.html">404 Page</Link>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item-has-children">
                                 <Link to="#">Language</Link>
                                 <ul className="dropdown">
                                    <li>
                                       <Link to="#">English</Link>
                                    </li>
                                    <li>
                                       <Link to="#">French</Link>
                                    </li>
                                    <li>
                                       <Link to="#">German</Link>
                                    </li>
                                    <li>
                                       <Link to="#">Spanish</Link>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </nav>
                        {/* mobile menu end */}
                     </div>
                     <div className="mobile-header-info-wrap">
                        <div className="single-mobile-header-info">
                           <Link to="page-contact.html">
                              <i className="fi-rs-marker" /> Our location{" "}
                           </Link>
                        </div>
                        <div className="single-mobile-header-info">
                           <Link to="page-login.html">
                              <i className="fi-rs-user" />
                              Log In / Sign Up{" "}
                           </Link>
                        </div>
                        <div className="single-mobile-header-info">
                           <Link to="#">
                              <i className="fi-rs-headphones" />
                              (+01) - 2345 - 6789{" "}
                           </Link>
                        </div>
                     </div>
                     <div className="mobile-social-icon mb-50">
                        <h6 className="mb-15">Follow Us</h6>
                        <Link to="#">
                           <img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" />
                        </Link>
                        <Link to="#">
                           <img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" />
                        </Link>
                        <Link to="#">
                           <img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" />
                        </Link>
                        <Link to="#">
                           <img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" />
                        </Link>
                        <Link to="#">
                           <img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" />
                        </Link>
                     </div>
                     <div className="site-copyright">
                        Copyright 2022 © Nest. All rights reserved. Powered by AliThemes.
                     </div>
                  </div>
               </div>
            </div>


    </div>
    </>
  )
}

export default Header