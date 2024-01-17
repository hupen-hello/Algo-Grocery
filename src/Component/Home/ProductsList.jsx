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
// import '../Assets/css/j.css'

const ProductsList = ({productData}) => {
  return (
    <div>
      {" "}
      <section className="product-tabs section-padding position-relative">
        <div className="container">
          <div className="section-title style-2 wow animate__animated animate__fadeIn">
            <h3>Popular Products</h3>
            <ul className="nav nav-tabs links">
              <li className="nav-item">
                <button className="nav-link ">All</button>
              </li>
            </ul>
          </div>
          {/*End nav-tabs*/}
          <div className="">
            <div className=" fade show ">
              <div className="row product-grid-4">
                {productData &&
                  productData.map((data, index) => {
                    return (
                      <div
                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                        key={index}
                      >
                        <div
                          className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn"
                          data-wow-delay=".1s"
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={`/Shop/Shopproduct/${data?._id}`}>
                                <img
                                  className="default-img"
                                  src={data?.images?.[0]?.url}
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src={data?.images?.[0]?.url}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn"
                                to={`/Shop/Shopproduct/${data?._id}`}
                              >
                                <i className="fi-rs-heart" />
                              </Link>
                              <Link
                                aria-label="Compare"
                                className="action-btn"
                                to={`/Shop/Shopproduct/${data?._id}`}
                              >
                                <i className="fi-rs-shuffle" />
                              </Link>
                              <Link
                                aria-label="Quick view"
                                className="action-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#quickViewModal"
                                to={`/Shop/Shopproduct/${data?._id}`}
                              >
                                <i className="fi-rs-eye" />
                              </Link>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Hot</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <Link to={`/Shop/Shopproduct/${data?._id}`}>
                                {data?.category?.title}
                              </Link>
                            </div>
                            <h2>
                              <Link to={`/Shop/Shopproduct/${data?._id}`}>
                                Seeds of Change Organic Quinoa, Brown, &amp; Red
                                Rice
                              </Link>
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
                                By{" "}
                                <Link to={`/Shop/Shopproduct/${data?._id}`}>
                                  {data?.brand}
                                </Link>
                              </span>
                            </div>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span> ₹ {data?.price}</span>
                                <span className="old-price"> {data?.discount} %</span>
                              </div>
                              <div className="add-cart">
                                <Link className="add" to={`/Shop/Shopproduct/${data?._id}`}>
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/*End tab-content*/}
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
