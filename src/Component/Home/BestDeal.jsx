import React, { useState, useEffect } from "react";
import { getallCategory, getallProduct } from "../Api/AllApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery"; // Import jQuery
import "jquery-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight } from "feather-icons-react";

// import '../Assets/css/main.css'
import Logo from "../Assets/imgs/theme/logo.svg";
import Compareimg from "../Assets/imgs/theme/icons/icon-compare.svg";
import cartimg from "../Assets/imgs/theme/icons/icon-heart.svg";
import Whisimg from "../Assets/imgs/theme/icons/icon-cart.svg";
import Accimg from "../Assets/imgs/theme/icons/icon-user.svg";
import Hotimg from "../Assets/imgs/theme/icons/icon-hot-white.svg";
import Hotline from "../Assets/imgs/theme/icons/icon-headphone-white.svg";
import Dontimg from "../Assets/imgs/banner/banner-menu.png";
import Slider8 from "../Assets/imgs/slider/slider-8.png";
import FeaturedCategory from "./FeaturedCategory";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";

const BestDeal = () => {
  return (
    <div> <section className="section-padding pb-5">
    <div className="container">
      <div
        className="section-title wow animate__animated animate__fadeIn"
        data-wow-delay={0}
      >
        <h3 className="">Deals Of The Day</h3>
        <a className="show-all" href="shop-grid-right.html">
          All Deals
          <i className="fi-rs-angle-right" />
        </a>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div
            className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
            data-wow-delay={0}
          >
            <div className="product-img-action-wrap">
              <div className="product-img">
                <a href="shop-product-right.html">
                  <img
                    src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-5.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="deals-countdown-wrap">
                <div
                  className="deals-countdown"
                  data-countdown="2025/03/25 00:00:00"
                />
              </div>
              <div className="deals-content">
                <h2>
                  <a href="shop-product-right.html">
                    Seeds of Change Organic Quinoa, Brown, &amp; Red
                    Rice
                  </a>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    (4.0)
                  </span>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <a href="vendor-details-1.html">NestFood</a>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$32.85</span>
                    <span className="old-price">$33.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="mr-5"
                      />
                      Add{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div
            className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
            data-wow-delay=".1s"
          >
            <div className="product-img-action-wrap">
              <div className="product-img">
                <a href="shop-product-right.html">
                  <img
                    src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-6.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="deals-countdown-wrap">
                <div
                  className="deals-countdown"
                  data-countdown="2026/04/25 00:00:00"
                />
              </div>
              <div className="deals-content">
                <h2>
                  <a href="shop-product-right.html">
                    Perdue Simply Smart Organics Gluten Free
                  </a>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "90%" }}
                    />
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    (4.0)
                  </span>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <a href="vendor-details-1.html">Old El Paso</a>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$24.85</span>
                    <span className="old-price">$26.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="mr-5"
                      />
                      Add{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
          <div
            className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="product-img-action-wrap">
              <div className="product-img">
                <a href="shop-product-right.html">
                  <img
                    src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-7.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="deals-countdown-wrap">
                <div
                  className="deals-countdown"
                  data-countdown="2027/03/25 00:00:00"
                />
              </div>
              <div className="deals-content">
                <h2>
                  <a href="shop-product-right.html">
                    Signature Wood-Fired Mushroom and Caramelized
                  </a>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    (3.0)
                  </span>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <a href="vendor-details-1.html">Progresso</a>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$12.85</span>
                    <span className="old-price">$13.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="mr-5"
                      />
                      Add{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
          <div
            className="product-cart-wrap style-2 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="product-img-action-wrap">
              <div className="product-img">
                <a href="shop-product-right.html">
                  <img
                    src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-8.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="product-content-wrap">
              <div className="deals-countdown-wrap">
                <div
                  className="deals-countdown"
                  data-countdown="2025/02/25 00:00:00"
                />
              </div>
              <div className="deals-content">
                <h2>
                  <a href="shop-product-right.html">
                    Simply Lemonade with Raspberry Juice
                  </a>
                </h2>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <span className="font-small ml-5 text-muted">
                    {" "}
                    (3.0)
                  </span>
                </div>
                <div>
                  <span className="font-small text-muted">
                    By <a href="vendor-details-1.html">Yoplait</a>
                  </span>
                </div>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$15.85</span>
                    <span className="old-price">$16.8</span>
                  </div>
                  <div className="add-cart">
                    <a className="add" href="shop-cart.html">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="mr-5"
                      />
                      Add{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default BestDeal