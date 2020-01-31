import React from 'react';
import Slick from 'react-slick';

const FeedCardView = () => {
    const carouselSetting = {
        dots: false,
        infinite: false,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="feed_card_view_div">
            <div className="feed_card_view_header">
                <img className="feed_card_view_thumnail feed_card_view_header_margin" src="https://via.placeholder.com/150"/>
                <div className="feed_card_view_header_margin">
                    <div className="feed_card_view_header_maker_name">메이커닉네임</div>
                    <div className="feed_card_view_header_upload_time">1일 전</div>
                </div>
                <button className="feed_card_view_header_margin feed_card_view_header_button feed_card_view_header_button_text">팔로우</button>
            </div>
            <Slick className="margin_auto width_ninth height_ninth feed_card_view_image_slick">
                <img className="feed_card_view_image width_ninth height_ninth" src="https://via.placeholder.com/150"/>
            </Slick>

        </div>
    );
};

export default FeedCardView;