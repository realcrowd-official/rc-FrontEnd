import React from 'react';
import Slider from 'react-slick';

const FeedCarousel = () => {
  const carouselSetting = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 4000,
    slideToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="max_container carousel_div">
      <Slider {...carouselSetting} className="max_container">
        <div>
          <img
            className="carousel_img max_container"
            src="https://via.placeholder.com/480x320"
          ></img>
        </div>
        <div>
          <img
            className="carousel_img max_container"
            src="https://via.placeholder.com/320x280"
          ></img>
        </div>
        <div>
          <img
            className="carousel_img max_container"
            src="https://via.placeholder.com/720x480"
          ></img>
        </div>
      </Slider>

      {/* <img className="feed_carousel_img max_container" src="https://via.placeholder.com/150"></img> */}
    </div>
  );
};

export default FeedCarousel;
