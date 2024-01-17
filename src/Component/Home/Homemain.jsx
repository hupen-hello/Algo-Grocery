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
import BestDeal from "./BestDeal";
import DealDay from "./DealDay";
import TopSell from "./TopSell";

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

  const itemsPerPage = 10;
  const [visibleCategories, setVisibleCategories] = useState(itemsPerPage);

  const showMoreCategories = () => {
    setVisibleCategories((prevVisibleCategories) => prevVisibleCategories + 5);
  };
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

        <div className="main">
          <div className="home-slider position-relative mb-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 d-none d-lg-flex">
                  <div className="categories-dropdown-wrap style-2 font-heading mt-30">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        {categoryData &&
                          categoryData
                            .slice(0, visibleCategories)
                            .map((data, index) => (
                              <li key={index}>
                                <Link to={`${data?._id}`}>
                                  <img src={data?.image} alt="" />
                                  {data?.title}
                                </Link>
                              </li>
                            ))}
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
                    {visibleCategories < categoryData.length && (
                      <div
                        className="more_categories"
                        onClick={showMoreCategories}
                      >
                        <span className="icon" />{" "}
                        <span className="heading-sm-1">Show more...</span>
                      </div>
                    )}
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
                            Shop Now <i className="fi-rs-arrow-right" />
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
                            Shop Now <i className="fi-rs-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End hero slider*/}
          <FeaturedCategory categoryData={categoryData} />
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
                        <i className="fi-rs-arrow-right" />
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
                        <i className="fi-rs-arrow-right" />
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
                        <i className="fi-rs-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End banners*/}
         <ProductsList productData={productData}/>
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
        <DealDay/>
          {/*End Best Sales*/}

         <BestDeal/>
          {/*End Deals*/}
          
          {/*End 4 columns*/}
          <TopSell/>
        </div>

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
