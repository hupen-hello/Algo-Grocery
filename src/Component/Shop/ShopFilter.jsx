import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ArrowRight } from "feather-icons-react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getallCategory, getallProduct } from "../Api/AllApi";

function ShopFilter() {
  const [CategoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getallCategory();
        setCategoryData(result?.[0]?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(CategoryData, "CategoryData");


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
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <FontAwesomeIcon icon={faHome} className="mr-5" />
                Home
              </Link>
              <span /> Shop <span /> Fillter
            </div>
          </div>
        </div>
        <div className="container mb-30 mt-30">
          <div className="row">
            <div className="col-lg-12">
              <a className="shop-filter-toogle" href="#">
                <span className="fi-rs-filter mr-5" />
                Filters
                <i className="fi-rs-angle-small-down angle-down" />
                <i className="fi-rs-angle-small-up angle-up" />
              </a>
              <div className="shop-product-fillter-header">
                <div className="row">
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30">By Categories</h5>
                      <div className="categories-dropdown-wrap font-heading">
                        <ul>
                          {CategoryData &&
                            CategoryData.map((data, shop) => {
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
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30">By Vendors</h5>
                      <div className="d-flex">
                        <div className="custome-checkbox mr-80">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox1"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox1"
                          >
                            <span>Aldi</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox2"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox2"
                          >
                            <span>Adidas</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox3"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox3"
                          >
                            <span>Burbe</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox4"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox4"
                          >
                            <span>Chanel</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox5"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox5"
                          >
                            <span>Prada</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox6"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox6"
                          >
                            <span>Kroger</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox7"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox7"
                          >
                            <span>Traders</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox8"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox8"
                          >
                            <span>Publix</span>
                          </label>
                        </div>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox11"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox11"
                          >
                            <span>Harris</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox21"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox21"
                          >
                            <span>Costco</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox31"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox31"
                          >
                            <span>Targets</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox41"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox41"
                          >
                            <span>Green Tea</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox51"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox51"
                          >
                            <span>iSnack</span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox61"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox61"
                          >
                            <span>Pambox</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-2 mb-sm-2">
                    <div className="card">
                      <h5 className="mb-30">By Tags</h5>
                      <div className="sidebar-widget widget-tags">
                        <ul className="tags-list">
                          <li className="hover-up">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Milk
                            </a>
                          </li>
                          <li className="hover-up">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross "
                              />
                              Broccoli
                            </a>
                          </li>
                          <li className="hover-up">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Smoothie
                            </a>
                          </li>
                          <li className="hover-up">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Fruit
                            </a>
                          </li>
                          <li className="hover-up mr-0">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Salad
                            </a>
                          </li>
                          <li className="hover-up mr-0">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Appetizer
                            </a>
                          </li>
                          <li className="hover-up mr-0 mb-0">
                            <a href="blog-category-grid.html">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="fi-rs-cross mr-10"
                              />
                              Appetizer
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-md-6 mb-lg-0 mb-md-5 mb-sm-5">
                    <div className="card">
                      <h5 className="mb-10">By Price</h5>
                      <div className="sidebar-widget price_range range">
                        <div className="price-filter mb-20">
                          <div className="price-filter-inner">
                            <div id="slider-range" className="mb-20" />
                            <div className="d-flex justify-content-between">
                              <div className="caption">
                                From:{" "}
                                <strong
                                  id="slider-range-value1"
                                  className="text-brand"
                                />
                              </div>
                              <div className="caption">
                                To:{" "}
                                <strong
                                  id="slider-range-value2"
                                  className="text-brand"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox211"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox211"
                          >
                            <span>$0.00 - $20.00 </span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox22"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox22"
                          >
                            <span>$20.00 - $40.00 </span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox23"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox23"
                          >
                            <span>$40.00 - $60.00 </span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox24"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox24"
                          >
                            <span>$60.00 - $80.00 </span>
                          </label>
                          <br />
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox25"
                            defaultValue=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheckbox25"
                          >
                            <span>Over $100.00</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    We found <strong className="text-brand">29</strong> items
                    for you!
                  </p>
                </div>
                <div className="sort-by-product-area">
                  <div className="sort-by-cover mr-10">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by">
                        <span>
                          <i className="fi-rs-apps" />
                          Show:
                        </span>
                      </div>
                      <div className="sort-by-dropdown-wrap">
                        <span>
                          {" "}
                          50 <i className="fi-rs-angle-small-down" />
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <a className="active" href="#">
                            50
                          </a>
                        </li>
                        <li>
                          <a href="#">100</a>
                        </li>
                        <li>
                          <a href="#">150</a>
                        </li>
                        <li>
                          <a href="#">200</a>
                        </li>
                        <li>
                          <a href="#">All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sort-by-cover">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by">
                        <span>
                          <i className="fi-rs-apps-sort" />
                          Sort by:
                        </span>
                      </div>
                      <div className="sort-by-dropdown-wrap">
                        <span>
                          {" "}
                          Featured <i className="fi-rs-angle-small-down" />
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <a className="active" href="#">
                            Featured
                          </a>
                        </li>
                        <li>
                          <a href="#">Price: Low to High</a>
                        </li>
                        <li>
                          <a href="#">Price: High to Low</a>
                        </li>
                        <li>
                          <a href="#">Release Date</a>
                        </li>
                        <li>
                          <a href="#">Avg. Rating</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-grid">

              {productData &&
                      productData.map((data, index) => {
                        console.log(productData, "dgyhjvh");
                        return (
                          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
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
                        <a href="shop-grid-right.html">Snack</a>
                      </div>
                      <h2>
                        <a href="shop-product-right.html">
                          {data?.title}
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
                          <span>$28.85</span>
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
                
                {/*end product card*/}
                
                {/*end product card*/}
              </div>
              {/*product grid*/}
              <div className="pagination-area mt-20 mb-20">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fi-rs-arrow-small-left" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link dot" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fi-rs-arrow-small-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <section className="section-padding pb-5">
                <div className="section-title">
                  <h3 className="">Deals Of The Day</h3>
                  <a className="show-all" href="shop-grid-right.html">
                    All Deals
                    <FontAwesomeIcon icon={faAngleRight} />
                  </a>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="product-cart-wrap style-2">
                      <div className="product-img-action-wrap">
                        <div className="product-img">
                          <a href="shop-product-right.html">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
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
                              Seeds of Change Organic Quinoa, Brown
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
                    <div className="product-cart-wrap style-2">
                      <div className="product-img-action-wrap">
                        <div className="product-img">
                          <a href="shop-product-right.html">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
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
                              Perdue Simply Smart Organics Gluten
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
                    <div className="product-cart-wrap style-2">
                      <div className="product-img-action-wrap">
                        <div className="product-img">
                          <a href="shop-product-right.html">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
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
                              Signature Wood-Fired Mushroom
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
                    <div className="product-cart-wrap style-2">
                      <div className="product-img-action-wrap">
                        <div className="product-img">
                          <a href="shop-product-right.html">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/product-1-2.jpg"
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
              </section>
              {/*End Deals*/}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ShopFilter;
