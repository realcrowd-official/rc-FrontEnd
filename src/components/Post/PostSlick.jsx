import React from 'react';
import Slick from 'react-slick';

const PostSlick = () => {
  const carouselSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <>
      <Slick {...carouselSetting} className="feed_card_view_image_slick">
        <img
          className="feed_card_view_image"
          src="https://via.placeholder.com/150"
        />
      </Slick>
    </>
  );
};

export default PostSlick;
