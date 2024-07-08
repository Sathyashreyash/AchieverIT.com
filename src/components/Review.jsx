import React from "react";
import userReviews from "../data/Reviews";
import "../css/review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";

const Review = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="review-container">
      <h3>REVIEWS</h3>
      <Slider {...settings}>
        {userReviews.map((user, i) => (
          <div key={i} className="main-reviews">
            <div className="s">
              <div className="user">
                <p className="user-reviews">{user.courseName}</p>
              </div>
              <p className="course-name">{user.course}</p>
              <p className="reviews-star">⭐⭐⭐⭐⭐</p>
              <p className="review-dis">{user.Discription}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="all-reviews">
        <a href="">
          VIEW ALL REVIEWS <IoIosArrowForward />{" "}
        </a>
      </div>
    </div>
  );
};

export default Review;
