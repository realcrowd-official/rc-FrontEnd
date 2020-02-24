import React, { useContext } from 'react';
import FundingProgress from '@/components/FundingProgress';
import TabContext from '@/context/tab';
import FundingReservate from '@/components/FundingReservate';

const ProjectCardView = props => {
  const { state } = useContext(TabContext);
  return (
    <div className="card_view_container max_container">
      <div className="card_view_img_div">
        <img
          className="card_view_img"
          src={
            props.value.maker.thumNailPic
              ? props.value.maker.thumNailPic
              : 'https://via.placeholder.com/150'
          }
        ></img>
      </div>
      <div className="card_view_user_profile_img_div card_view_funding_left_margin">
        <img
          className="card_view_user_profile_img"
          src="https://via.placeholder.com/150"
        ></img>
      </div>
      <div className="card_view_funding_information_div card_view_funding_left_margin">
        <p>{props.value.title}</p>
      </div>
      <div className="card_view_funding_user_name_div card_view_funding_left_margin">
        <p>{props.value.maker.nickName}</p>
      </div>
      <div className="card_view_funding_left_margin">
        {state.tabMenu === 'doing' ? (
          <FundingProgress
            id={props.value._id}
            aggregate={props.value.aggregateAmount}
            target={props.value.targetAmount}
            dueDate={props.value.dueDate}
          />
        ) : (
          <FundingReservate
            id={props.value._id}
            startDate={props.value.startDate}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCardView;
