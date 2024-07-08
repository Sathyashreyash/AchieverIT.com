// import React from "react";
import "../css/cards.css";
import cardDetails from "../data/CardDetails";
import cardDetails2 from "../data/CardDetails2";
import cardDetails3 from "../data/cardDetails3";
import Review from "./Review";

const Cards = () => {
  return (
    <div className="card-container">
      <div className="card1">
        <div className="card-items">
          <div className="couses">
            <p>
              <span>BECOME A </span>
              <br /> UI DEVELOPER
            </p>
            <a href="#">Know More </a>
          </div>
          <div className="couses">
            <p>
              <span>BECOME A </span>
              <br /> UI DEVELOPER
            </p>
            <a href="#">Know More </a>
          </div>
          <div className="couses">
            <p>
              <span>BECOME A </span>
              <br /> UI DEVELOPER
            </p>
            <a href="#">Know More </a>
          </div>
        </div>
      </div>
      <div className="card2">
        <h3>TRENDING COURSES</h3>
        <div className="card-section2">
          {cardDetails.map((item, ind) => (
            <div className="all-courses" key={ind}>
              <p className='course-name-angular'>{item.courseName}</p>
              <p className="course-details">{item.discription}</p>
              <p className="reviews"> <span>Review </span> 
                {item.rating.stars} ⭐ {item.rating.count}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card2">
        <h3>RECENT ADDITIONS</h3>
        <div className="card-section2">
        {cardDetails2.map((item, index) => (
            <div className="all-courses" key={index}>
              <p className='course-name-angular'>{item.courseName}</p>
              <p className="course-details">{item.discription}</p>
              <p className="reviews"> <span>Review </span> 
                {item.rating.stars} ⭐ {item.rating.count}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card2">
        <h3>Discover Top Categories</h3>
        <div className="card-section3">
        {cardDetails3.map((item, i) => (
            <div className="all-courses-list" key={i}>
              <p className='course-img'>{item.img}</p>
              <p className="course-details">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Review/>
    </div>
  );
};

export default Cards;