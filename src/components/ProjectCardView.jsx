import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FundingProgress from '@/components/FundingProgress';
import TabContext from '@/context/tab';
import FundingReservate from '@/components/FundingReservate';

const ProjectCardView = (props) => {
  const { state } = useContext(TabContext);
  console.log(props.value);

  return (
    <div className="card_view_container max_container">
      <Link to={props.type === 'doing' && `/funding/detail/${props.value._id}`}>
        <div className="card_view_img_div">
          <img
            className="card_view_img"
            src={
              props.value.mainImg
                ? props.value.mainImg
                : 'https://via.placeholder.com/150'
            }
          ></img>
        </div>
        <div className="card_view_user_profile_img_div card_view_funding_left_margin">
          <img
            className="card_view_user_profile_img"
            src={
              props.value.maker.thumNailPic
                ? props.value.maker.thumNailPic
                : 'https://via.placeholder.com/150'
            }
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
      </Link>
    </div>
  );
};

export default ProjectCardView;
