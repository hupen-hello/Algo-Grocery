import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { getallCategory } from "../Api/AllApi";
function Purchasedguid() {
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
  return (
    <>
      <main className="main pages">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.htm" rel="nofollow">
                <FontAwesomeIcon icon={faHome} className="mr-5" />
                Home
              </a>
              <span /> Pages <span /> Purchase Guide
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="single-page pr-30 mb-lg-0 mb-sm-5">
                      <div className="single-header style-2">
                        <h2>Purchase Guide</h2>
                        <div className="entry-meta meta-1 meta-3 font-xs mt-15 mb-15">
                          <span className="post-by">
                            By <a href="#">Jonh</a>
                          </span>
                          <span className="post-on has-dot">9 April 2020</span>
                          <span className="time-reading has-dot">
                            8 mins read
                          </span>
                          <span className="hit-count has-dot">29k Views</span>
                        </div>
                      </div>
                      <figure className="border-radius-15 mb-30">
                        <img
                          className="border-radius-15"
                          src="https://nest-frontend.netlify.app/assets/imgs/page/guide-1.png"
                          alt=""
                        />
                      </figure>
                      <div className="single-content mb-50">
                        <h3>1. Account Registering</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nulla modi dolores neque omnis ipsa? Quia, nam
                          voluptas! Aut, magnam molestias:
                        </p>
                        <ul className="mb-30">
                          <li>Name (required)</li>
                          <li>Age (required)</li>
                          <li>Date of birth (required)</li>
                          <li>Passport/ ID no. (required)</li>
                          <li>Current career (required)</li>
                          <li>Mobile phone numbers (required)</li>
                          <li>Email address (required)</li>
                          <li>Hobbies &amp; interests (optional)</li>
                          <li>Social profiles (optional)</li>
                        </ul>
                        <h3>2. Select Product</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit officia necessitatibus repellat placeat
                          aut enim recusandae assumenda adipisci quisquam,
                          deserunt iure veritatis cupiditate modi aspernatur
                          accusantium, mollitia doloribus. Velit, iste.
                        </p>
                        <h3>3. Confirm Order Content</h3>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Libero ut autem sed! Assumenda, nostrum non
                          doloribus tenetur, pariatur veritatis harum natus
                          ipsam maiores dolorem repudiandae laboriosam,
                          cupiditate odio earum eum?
                        </p>
                        <h3>4.Transaction Completed</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam nesciunt nam aut magnam libero aspernatur
                          eaque praesentium? Tempore labore quis neque? Magni.
                        </p>
                        <h3>5. Accepted Credit Cards</h3>
                        <ul>
                          <li>Visa</li>
                          <li>Mastercards</li>
                          <li>American Express</li>
                          <li>Discover</li>
                        </ul>
                        <span>
                          *Taxes are calculated by your local bank and location.
                        </span>
                        <h3 className="mt-30">6. Download and Setup</h3>
                        <ul>
                          <li>Updated content on a regular basis</li>
                          <li>Secure &amp; hassle-free payment</li>
                          <li>1-click checkout</li>
                          <li>Easy access &amp; smart user dashboard</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 primary-sidebar sticky-sidebar">
                    <div className="widget-area">
                      <div className="sidebar-widget-2 widget_search mb-50">
                        <div className="search-form">
                          <form action="#">
                            <input type="text" placeholder="Search…" />
                            <button type="submit">
                              <i className="fi-rs-search" />
                            </button>
                          </form>
                        </div>
                      </div>
                      <div className="sidebar-widget widget-category-2 mb-30">
                        <h5 className="section-title style-1 mb-30">
                          Category
                        </h5>
                        <ul>
                          {CategoryData &&
                            CategoryData.map((data, Purchasedguid) => {
                              return (
                                <li>
                                  <a href="shop-grid-right.html">
                                    {" "}
                                    <img src={data?.image} alt="" />
                                    {data?.title}
                                  </a>
                                  <span className="count">30</span>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                      {/* Product sidebar Widget */}
                      <div className="sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10">
                        <h5 className="section-title style-1 mb-30">
                          Trending Now
                        </h5>
                        <div className="single-post clearfix">
                          <div className="image">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                              alt="#"
                            />
                          </div>
                          <div className="content pt-10">
                            <h5>
                              <a href="shop-product-detail.html">
                                Chen Cardigan
                              </a>
                            </h5>
                            <p className="price mb-0 mt-5">$99.50</p>
                            <div className="product-rate">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="single-post clearfix">
                          <div className="image">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                              alt="#"
                            />
                          </div>
                          <div className="content pt-10">
                            <h6>
                              <a href="shop-product-detail.html">
                                Chen Sweater
                              </a>
                            </h6>
                            <p className="price mb-0 mt-5">$89.50</p>
                            <div className="product-rate">
                              <div
                                className="product-rating"
                                style={{ width: "80%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="single-post clearfix">
                          <div className="image">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                              alt="#"
                            />
                          </div>
                          <div className="content pt-10">
                            <h6>
                              <a href="shop-product-detail.html">
                                Colorful Jacket
                              </a>
                            </h6>
                            <p className="price mb-0 mt-5">$25</p>
                            <div className="product-rate">
                              <div
                                className="product-rating"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="single-post clearfix">
                          <div className="image">
                            <img
                              src="https://nest-frontend.netlify.app/assets/imgs/shop/thumbnail-4.jpg"
                              alt="#"
                            />
                          </div>
                          <div className="content pt-10">
                            <h6>
                              <a href="shop-product-detail.html">
                                Lorem, ipsum
                              </a>
                            </h6>
                            <p className="price mb-0 mt-5">$25</p>
                            <div className="product-rate">
                              <div
                                className="product-rating"
                                style={{ width: "60%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="banner-img wow fadeIn mb-40 animated d-lg-block d-none">
                        <img
                          src="https://nest-frontend.netlify.app/assets/imgs/banner/banner-11.png"
                          alt=""
                        />
                        <div className="banner-text">
                          <span>Oganic</span>
                          <h4>
                            Save 17% <br />
                            on <span className="text-brand">Oganic</span>
                            <br />
                            Juice
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Purchasedguid;
