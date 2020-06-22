import React from 'react';
import Slick from 'react-slick';

const PostSlick = (props) => {
  const carouselSetting = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slideToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: false,
  };
  return (
    <div className="carousel_div">
      <Slick {...carouselSetting} className="feed_card_view_image_slick">
        {props.value.map((Data) => {
          return (
            <div>
              <img className="feed_card_view_image" src={Data} />
            </div>
          );
        })}
      </Slick>
    </div>
  );
};

export default PostSlick;
