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

function Homemain() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderSettings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10, // Adjust the number of slides to show at a time
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideStyle = {
    margin: "15px", // Adjust the margin as needed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const result = await getallCategory(); // Call your API function
        setCategoryData(result?.[0]?.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array means it will run once when the component mounts

  console.log(categoryData, "categoryData");

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const result = await getallProduct();
        // Call your API function
        console.log(result?.[0]?.data, "");
        setProductData(result?.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array means it will run once when the component mounts

  console.log(productData, "productData");

  return (
    <>
      <div>
        <div
          className="modal fade custom-modal"
          id="quickViewModal"
          tabindex="-1"
          aria-labelledby="quickViewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                    <div className="detail-gallery">
                      <span className="zoom-icon">
                        <i className="fi-rs-search"></i>
                      </span>
                      <div className="product-image-slider">
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-2.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-1.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-3.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-4.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-5.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-6.jpg"
                            alt="product image"
                          />
                        </figure>
                        <figure className="border-radius-10">
                          <img
                            src="assets/imgs/shop/product-16-7.jpg"
                            alt="product image"
                          />
                        </figure>
                      </div>
                      <div className="slider-nav-thumbnails">
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-3.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-4.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-5.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-6.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-7.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-8.jpg"
                            alt="product image"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/imgs/shop/thumbnail-9.jpg"
                            alt="product image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="detail-info pr-30 pl-30">
                      <span className="stock-status out-stock"> Sale Off </span>
                      <h3 className="title-detail">
                        <a
                          className="text-heading"
                          href="shop-product-right.html"
                        >
                          Seeds of Change Organic Quinoa, Brown
                        </a>
                      </h3>
                      <div className="product-detail-rating">
                        <div className="product-rate-cover text-end">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              sx="width: 90%"
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (32 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="clearfix product-price-cover">
                        <div className="product-price primary-color float-left">
                          <span className="current-price text-brand">$38</span>
                          <span>
                            <span className="save-price font-md color3 ml-15">
                              26% Off
                            </span>
                            <span className="old-price font-md ml-15">$52</span>
                          </span>
                        </div>
                      </div>
                      <div className="detail-extralink mb-30">
                        <div className="detail-qty border radius">
                          <a href="#" className="qty-down">
                            <i className="fi-rs-angle-small-down"></i>
                          </a>
                          <span className="qty-val">1</span>
                          <a href="#" className="qty-up">
                            <i className="fi-rs-angle-small-up"></i>
                          </a>
                        </div>
                        <div className="product-extra-link2">
                          <button
                            type="submit"
                            className="button button-add-to-cart"
                          >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className="font-xs">
                        <ul>
                          <li className="mb-5">
                            Vendor: <span className="text-brand">Nest</span>
                          </li>
                          <li className="mb-5">
                            MFG:<span className="text-brand"> Jun 4.2022</span>
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

        <main className="main">
          <section className="home-slider position-relative mb-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 d-none d-lg-flex">
                  <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        {categoryData &&
                          categoryData.map((data, index) => {
                            return (
                              <li>
                                <a href="shop-grid-right.html">
                                  {" "}
                                  <img src={data?.image} alt="" />
                                  {data?.title}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img
                                src="assets/imgs/theme/icons/icon-1.svg"
                                alt=""
                              />
                              Milks and Dairies
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img
                                src="assets/imgs/theme/icons/icon-2.svg"
                                alt=""
                              />
                              Clothing &amp; beauty
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img
                                src="assets/imgs/theme/icons/icon-3.svg"
                                alt=""
                              />
                              Wines &amp; Drinks
                            </a>
                          </li>
                          <li>
                            <a href="shop-grid-right.html">
                              {" "}
                              <img
                                src="assets/imgs/theme/icons/icon-4.svg"
                                alt=""
                              />
                              Fresh Seafood
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="more_categories">
                      <span className="icon" />{" "}
                      <span className="heading-sm-1">Show more...</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="home-slide-cover mt-30">
                    <Slider {...sliderSettings}>
                      <div className="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
                        <div
                          className="single-hero-slider single-animation-wrap"
                          style={{
                            backgroundImage: `url(${Slider8})`,
                          }}
                        >
                          <div className="slider-content">
                            <h1 className="display-2 mb-40">
                              Don’t miss amazing
                              <br />
                              grocery deals
                            </h1>
                            <p className="mb-65">
                              Sign up for the daily newsletter
                            </p>
                            <form className="form-subcriber d-flex">
                              <input
                                type="email"
                                placeholder="Your emaill address"
                              />
                              <button className="btn" type="submit">
                                Subscribe
                              </button>
                            </form>
                          </div>
                        </div>
                        {/* <div
                          className="single-hero-slider single-animation-wrap"
                          style={{
                            backgroundImage: `url(${Slider8})`,
                          }}
                        >
                          <div className="slider-content">
                            <h1 className="display-2 mb-40">
                              Fresh Vegetables
                              <br />
                              Big discount
                            </h1>
                            <p className="mb-65">
                              Save up to 50% off on your first order
                            </p>
                            <form className="form-subcriber d-flex">
                              <input
                                type="email"
                                placeholder="Your emaill address"
                              />
                              <button className="btn" type="submit">
                                Subscribe
                              </button>
                            </form>
                          </div>
                        </div> */}
                      </div>
                      <div className="hero-slider-1 style-5 dot-style-1 dot-style-1-position-2">
                        <div
                          className="single-hero-slider single-animation-wrap"
                          style={{
                            backgroundImage: `url(${Slider8})`,
                          }}
                        >
                          <div className="slider-content">
                            <h1 className="display-2 mb-40">
                              Don’t miss amazing
                              <br />
                              grocery deals
                            </h1>
                            <p className="mb-65">
                              Sign up for the daily newsletter
                            </p>
                            <form className="form-subcriber d-flex">
                              <input
                                type="email"
                                placeholder="Your emaill address"
                              />
                              <button className="btn" type="submit">
                                Subscribe
                              </button>
                            </form>
                          </div>
                        </div>
                        {/* <div
                          className="single-hero-slider single-animation-wrap"
                          style={{
                            backgroundImage: `url(${Slider8})`,
                          }}
                        >
                          <div className="slider-content">
                            <h1 className="display-2 mb-40">
                              Fresh Vegetables
                              <br />
                              Big discount
                            </h1>
                            <p className="mb-65">
                              Save up to 50% off on your first order
                            </p>
                            <form className="form-subcriber d-flex">
                              <input
                                type="email"
                                placeholder="Your emaill address"
                              />
                              <button className="btn" type="submit">
                                Subscribe
                              </button>
                            </form>
                          </div>
                        </div> */}
                      </div>

                      {/* <div className="slider-arrow hero-slider-1-arrow" /> */}
                    </Slider>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="row">
                    <div className="col-md-6 col-lg-12">
                      <div className="banner-img style-4 mt-30">
                        <img
                          src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-14.png"
                          alt=""
                        />
                        <div className="banner-text">
                          <h4 className="mb-30">
                            Everyday Fresh &amp; <br />
                            Clean with Our
                            <br />
                            Products
                          </h4>
                          <a
                            className="btn btn-xs mb-50"
                            href="shop-grid-right.html"
                          >
                            Shop Now <i className="fi-rs-arrow-small-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-12">
                      <div className="banner-img style-5 mt-5 mt-md-30">
                        <img
                          src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-15.png"
                          alt=""
                        />
                        <div className="banner-text">
                          <h5 className="mb-20">
                            The best Organic <br />
                            Products Online
                          </h5>
                          <a className="btn btn-xs" href="shop-grid-right.html">
                            Shop Now <i className="fi-rs-arrow-small-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End hero slider*/}
          <section className="popular-categories section-padding">
            <div className="container wow animate__animated animate__fadeIn">
              <div className="section-title">
                <div className="title">
                  <h3>Featured Categories</h3>
                  <ul className="list-inline nav nav-tabs links">
                    {categoryData &&
                      categoryData.map((data, index) => {
                        return (
                          <li className="list-inline-item nav-item">
                            <a className="nav-link" href="shop-grid-right.html">
                              {data?.title}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <div
                  className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow"
                  id="carausel-10-columns-arrows"
                />
              </div>
              <div className="carausel-10-columns-cover position-relative">
                <Slider
                  {...sliderSettings1}
                  className="carausel-10-columns"
                  id="carausel-10-columns"
                >
                  {categoryData &&
                    categoryData.map((data, index) => {
                      return (
                        <div
                          className="card-2 bg-9 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".1s"
                          style={slideStyle}
                        >
                          <figure className="img-hover-scale overflow-hidden">
                            <a href="shop-grid-right.html">
                              <img src={data?.image} alt="" />
                            </a>
                          </figure>
                          <h6>
                            <a href="shop-grid-right.html">{data?.title}</a>
                          </h6>
                          <span>26 items</span>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </section>
          {/*End category slider*/}
          <section className="banners mb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay={0}
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-1.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h4>
                        Everyday Fresh &amp; <br />
                        Clean with Our
                        <br />
                        Products
                      </h4>
                      <a className="btn btn-xs" href="shop-grid-right.html">
                        Shop Now{" "}
                        <ArrowRight className="fi-rs-arrow-small-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-2.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h4>
                        Make your Breakfast
                        <br />
                        Healthy and Easy
                      </h4>
                      <a className="btn btn-xs" href="shop-grid-right.html">
                        Shop Now{" "}
                        <ArrowRight className="fi-rs-arrow-small-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-md-none d-lg-flex">
                  <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-3.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h4>
                        The best Organic <br />
                        Products Online
                      </h4>
                      <a className="btn btn-xs" href="shop-grid-right.html">
                        Shop Now{" "}
                        <ArrowRight className="fi-rs-arrow-small-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End banners*/}
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
                        console.log(productData, "dgyhjvh");
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
                                  <a href="shop-product-right.html">
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
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    <i className="fi-rs-eye" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Hot</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">
                                    {data?.category?.title}
                                  </a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    Seeds of Change Organic Quinoa, Brown, &amp;
                                    Red Rice
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
                                    By{" "}
                                    <a href="vendor-details-1.html">{data?.brand}</a>
                                  </span>
                                </div>
                                <div className="product-card-bottom">
                                  <div className="product-price">
                                    <span>{data?.price}</span>
                                    <span className="old-price">$32.8</span>
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
                        );
                      })}
                  </div>
                </div>
              </div>
              {/*End tab-content*/}
            </div>
          </section>
          {/*Products Tabs*/}
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="banner-img style-6 wow animate__animated animate__fadeInUp"
                    data-wow-delay={0}
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-16.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h6 className="mb-10 mt-30">
                        Everyday Fresh with
                        <br />
                        Our Products
                      </h6>
                      <p>Go to supplier</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="banner-img style-6 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-17.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h6 className="mb-10 mt-30">
                        100% guaranteed all
                        <br />
                        Fresh items
                      </h6>
                      <p>Go to supplier</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="banner-img style-6 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-18.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h6 className="mb-10 mt-30">
                        Special grocery sale
                        <br />
                        off this month
                      </h6>
                      <p>Go to supplier</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div
                    className="banner-img style-6 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <img
                      src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-19.png"
                      alt=""
                    />
                    <div className="banner-text">
                      <h6 className="mb-10 mt-30">
                        Enjoy 15% OFF for all
                        <br />
                        vegetable and fruit
                      </h6>
                      <p>Go to supplier</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End 4 banners*/}
          <section className="section-padding pb-5">
            <div className="container">
              <div className="section-title wow animate__animated animate__fadeIn">
                <h3 className="">Daily Best Sells</h3>
                <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="nav-tab-one-1"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-one-1"
                      type="button"
                      role="tab"
                      aria-controls="tab-one"
                      aria-selected="true"
                    >
                      Featured
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="nav-tab-two-1"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-two-1"
                      type="button"
                      role="tab"
                      aria-controls="tab-two"
                      aria-selected="false"
                    >
                      Popular
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="nav-tab-three-1"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-three-1"
                      type="button"
                      role="tab"
                      aria-controls="tab-three"
                      aria-selected="false"
                    >
                      New added
                    </button>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                  <div className="banner-img style-2">
                    <div className="banner-text">
                      <h2 className="mb-100">Bring nature into your home</h2>
                      <a className="btn btn-xs" href="shop-grid-right.html">
                        Shop Now <i className="fi-rs-arrow-small-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
                  data-wow-delay=".4s"
                >
                  <div className="tab-content" id="myTabContent-1">
                    <div
                      className="tab-pane fade show active"
                      id="tab-one-1"
                      role="tabpanel"
                      aria-labelledby="tab-one-1"
                    >
                      <div className="carausel-4-columns-cover arrow-center position-relative">
                        <div
                          className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                          id="carausel-4-columns-arrows"
                        />
                        <div
                          className="carausel-4-columns carausel-arrow-center"
                          id="carausel-4-columns"
                        >
                          <Slider {...settings}>
                            <div className="product-cart-wrap">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a href="shop-product-right.html">
                                    <img
                                      className="default-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    {" "}
                                    <i className="fi-rs-eye" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Save 15%</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    Seeds of Change Organic Quinoa, Brown
                                  </a>
                                </h2>
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <div className="product-price mt-10">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                                <div className="sold mt-15 mb-15">
                                  <div className="progress mb-5">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="font-xs text-heading">
                                    {" "}
                                    Sold: 90/120
                                  </span>
                                </div>
                                <a
                                  className="btn w-100 hover-up"
                                  href="shop-cart.html"
                                >
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add To Cart
                                </a>
                              </div>
                            </div>
                            <div className="product-cart-wrap">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a href="shop-product-right.html">
                                    <img
                                      className="default-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    {" "}
                                    <i className="fi-rs-eye" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="new">Save 35%</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    All Natural Italian-Style Chicken Meatballs
                                  </a>
                                </h2>
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <div className="product-price mt-10">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                                <div className="sold mt-15 mb-15">
                                  <div className="progress mb-5">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="font-xs text-heading">
                                    {" "}
                                    Sold: 90/120
                                  </span>
                                </div>
                                <a
                                  className="btn w-100 hover-up"
                                  href="shop-cart.html"
                                >
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add To Cart
                                </a>
                              </div>
                            </div>
                            <div className="product-cart-wrap">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a href="shop-product-right.html">
                                    <img
                                      className="default-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    {" "}
                                    <i className="fi-rs-eye" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="sale">Sale</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    Angie’s Boomchickapop Sweet and womnies
                                  </a>
                                </h2>
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <div className="product-price mt-10">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                                <div className="sold mt-15 mb-15">
                                  <div className="progress mb-5">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="font-xs text-heading">
                                    {" "}
                                    Sold: 90/120
                                  </span>
                                </div>
                                <a
                                  className="btn w-100 hover-up"
                                  href="shop-cart.html"
                                >
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add To Cart
                                </a>
                              </div>
                            </div>
                            <div className="product-cart-wrap">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a href="shop-product-right.html">
                                    <img
                                      className="default-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    {" "}
                                    <i className="fi-rs-eye" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="best">Best sale</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    Foster Farms Takeout Crispy Classic{" "}
                                  </a>
                                </h2>
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <div className="product-price mt-10">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                                <div className="sold mt-15 mb-15">
                                  <div className="progress mb-5">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="font-xs text-heading">
                                    {" "}
                                    Sold: 90/120
                                  </span>
                                </div>
                                <a
                                  className="btn w-100 hover-up"
                                  href="shop-cart.html"
                                >
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add To Cart
                                </a>
                              </div>
                            </div>
                            <div className="product-cart-wrap">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <a href="shop-product-right.html">
                                    <img
                                      className="default-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                    <img
                                      className="hover-img"
                                      src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="product-action-1">
                                  <a
                                    aria-label="Quick view"
                                    className="action-btn small hover-up"
                                    data-bs-toggle="modal"
                                    data-bs-target="#quickViewModal"
                                  >
                                    {" "}
                                    <i className="fi-rs-eye" />
                                  </a>
                                  <a
                                    aria-label="Add To Wishlist"
                                    className="action-btn small hover-up"
                                    href="shop-wishlist.html"
                                  >
                                    <i className="fi-rs-heart" />
                                  </a>
                                  <a
                                    aria-label="Compare"
                                    className="action-btn small hover-up"
                                    href="shop-compare.html"
                                  >
                                    <i className="fi-rs-shuffle" />
                                  </a>
                                </div>
                                <div className="product-badges product-badges-position product-badges-mrg">
                                  <span className="hot">Save 15%</span>
                                </div>
                              </div>
                              <div className="product-content-wrap">
                                <div className="product-category">
                                  <a href="shop-grid-right.html">Hodo Foods</a>
                                </div>
                                <h2>
                                  <a href="shop-product-right.html">
                                    Blue Diamond Almonds Lightly Salted
                                  </a>
                                </h2>
                                <div className="product-rate d-inline-block">
                                  <div
                                    className="product-rating"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <div className="product-price mt-10">
                                  <span>$238.85 </span>
                                  <span className="old-price">$245.8</span>
                                </div>
                                <div className="sold mt-15 mb-15">
                                  <div className="progress mb-5">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <span className="font-xs text-heading">
                                    {" "}
                                    Sold: 90/120
                                  </span>
                                </div>
                                <a
                                  className="btn w-100 hover-up"
                                  href="shop-cart.html"
                                >
                                  <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    className="mr-5"
                                  />
                                  Add To Cart
                                </a>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                    {/*End tab-pane*/}
                    <div
                      className="tab-pane fade"
                      id="tab-two-1"
                      role="tabpanel"
                      aria-labelledby="tab-two-1"
                    >
                      <div className="carausel-4-columns-cover arrow-center position-relative">
                        <div
                          className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                          id="carausel-4-columns-2-arrows"
                        />
                        <div
                          className="carausel-4-columns carausel-arrow-center"
                          id="carausel-4-columns-2"
                        >
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-10-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-10-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Save 15%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Canada Dry Ginger Ale – 2 L Bottle
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-15-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-15-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">Save 35%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Encore Seafoods Stuffed Alaskan
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-12-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-12-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Gorton’s Beer Battered Fish{" "}
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-13-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-13-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">Best sale</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Haagen-Dazs Caramel Cone Ice
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-14-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-14-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Save 15%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Italian-Style Chicken Meatball
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="tab-three-1"
                      role="tabpanel"
                      aria-labelledby="tab-three-1"
                    >
                      <div className="carausel-4-columns-cover arrow-center position-relative">
                        <div
                          className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
                          id="carausel-4-columns-3-arrows"
                        />
                        <div
                          className="carausel-4-columns carausel-arrow-center"
                          id="carausel-4-columns-3"
                        >
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-7-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-7-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Save 15%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Perdue Simply Smart Organics Gluten Free
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-8-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-8-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">Save 35%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Seeds of Change Organic Quinoa
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-9-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-9-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Signature Wood-Fired Mushroom
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-13-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-13-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">Best sale</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Simply Lemonade with Raspberry Juice
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                          <div className="product-cart-wrap">
                            <div className="product-img-action-wrap">
                              <div className="product-img product-img-zoom">
                                <a href="shop-product-right.html">
                                  <img
                                    className="default-img"
                                    src="assets/imgs/shop/product-14-1.jpg"
                                    alt=""
                                  />
                                  <img
                                    className="hover-img"
                                    src="assets/imgs/shop/product-14-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-action-1">
                                <a
                                  aria-label="Quick view"
                                  className="action-btn small hover-up"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickViewModal"
                                >
                                  {" "}
                                  <i className="fi-rs-eye" />
                                </a>
                                <a
                                  aria-label="Add To Wishlist"
                                  className="action-btn small hover-up"
                                  href="shop-wishlist.html"
                                >
                                  <i className="fi-rs-heart" />
                                </a>
                                <a
                                  aria-label="Compare"
                                  className="action-btn small hover-up"
                                  href="shop-compare.html"
                                >
                                  <i className="fi-rs-shuffle" />
                                </a>
                              </div>
                              <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Save 15%</span>
                              </div>
                            </div>
                            <div className="product-content-wrap">
                              <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                              </div>
                              <h2>
                                <a href="shop-product-right.html">
                                  Organic Quinoa, Brown, &amp; Red Rice
                                </a>
                              </h2>
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "80%" }}
                                />
                              </div>
                              <div className="product-price mt-10">
                                <span>$238.85 </span>
                                <span className="old-price">$245.8</span>
                              </div>
                              <div className="sold mt-15 mb-15">
                                <div className="progress mb-5">
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                                <span className="font-xs text-heading">
                                  {" "}
                                  Sold: 90/120
                                </span>
                              </div>
                              <a
                                className="btn w-100 hover-up"
                                href="shop-cart.html"
                              >
                                <FontAwesomeIcon
                                  icon={faShoppingCart}
                                  className="mr-5"
                                />
                                Add To Cart
                              </a>
                            </div>
                          </div>
                          {/*End product Wrap*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End tab-content*/}
                </div>
                {/*End Col-lg-9*/}
              </div>
            </div>
          </section>
          {/*End Best Sales*/}

          <section className="section-padding pb-5">
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
          </section>
          {/*End Deals*/}
          <section className="section-padding mb-30">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay={0}
                >
                  <h4 className="section-title style-1 mb-30 animated animated">
                    Top Selling
                  </h4>
                  <div className="product-list-small animated animated">
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-2.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Nestle Original Coffee-Mate Coffee Creamer
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-3.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Nestle Original Coffee-Mate Coffee Creamer
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Nestle Original Coffee-Mate Coffee Creamer
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4 className="section-title style-1 mb-30 animated animated">
                    Trending Products
                  </h4>
                  <div className="product-list-small animated animated">
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-5.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Organic Cage-Free Grade A Large Brown Eggs
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-6.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Seeds of Change Organic Quinoa, Brown, &amp; Red
                            Rice
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-7.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Naturally Flavored Cinnamon Vanilla Light Roast
                            Coffee
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="section-title style-1 mb-30 animated animated">
                    Recently added
                  </h4>
                  <div className="product-list-small animated animated">
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-8.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Pepperidge Farm Farmhouse Hearty White Bread
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-8.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Organic Frozen Triple Berry Blend
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-9.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Oroweat Country Buttermilk Bread
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h4 className="section-title style-1 mb-30 animated animated">
                    Top Rated
                  </h4>
                  <div className="product-list-small animated animated">
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-10.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Foster Farms Takeout Crispy Classic Buffalo Wings
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-11.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                    <article className="row align-items-center hover-up">
                      <figure className="col-md-4 mb-0">
                        <a href="shop-product-right.html">
                          <img
                            src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-12.jpg"
                            alt=""
                          />
                        </a>
                      </figure>
                      <div className="col-md-8 mb-0">
                        <h6>
                          <a href="shop-product-right.html">
                            All Natural Italian-Style Chicken Meatballs
                          </a>
                        </h6>
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
                        <div className="product-price">
                          <span>$32.85</span>
                          <span className="old-price">$33.8</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End 4 columns*/}
        </main>

        {/* <div id="preloader-active">
               <div className="preloader d-flex align-items-center justify-content-center">
                  <div className="preloader-inner position-relative">
                     <div className="text-center">
                        <img src="assets/imgs/theme/loading.gif" alt="" />
                     </div>
                  </div>
               </div>
            </div> */}
      </div>
    </>
  );
}

export default Homemain;
