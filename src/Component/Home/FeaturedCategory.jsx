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
import { Link } from "react-router-dom";

const FeaturedCategory = ({ categoryData }) => {

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

  const itemsPerPage = 4;
  const [visibleCategories, setVisibleCategories] = useState(itemsPerPage);

  const showMoreCategories = () => {
    setVisibleCategories((prevVisibleCategories) => prevVisibleCategories + 5);
  };

  return (
    <>
      <div className="popular-categories section-padding">
        <div className="container wow animate__animated animate__fadeIn">
          <div className="section-title">
            <div className="title">
              <h3>Featured Categories</h3>
              <ul className="list-inline nav nav-tabs links">
                {categoryData &&
                    categoryData
                    .slice(0, visibleCategories)
                    .map((data, index) => (
                      <li className="list-inline-item nav-item">
                        <a className="nav-link" href="shop-grid-right.html">
                          {data?.title}
                        </a>
                      </li>
                  ))}
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
                        <Link to={`${data?._id}`}>
                          <img src={data?.image} alt="" />
                        </Link>
                      </figure>
                      <h6>
                        <Link to={`${data?._id}`}>{data?.title}</Link>
                      </h6>
                      <span>26 items</span>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategory;
