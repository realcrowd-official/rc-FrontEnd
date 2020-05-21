import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import accountContext from '@/context/account';

const AddressOption = (props) => {
  const history = useHistory();
  const ACONTEXT = useContext(accountContext);
  const selectItem = () => {
    ACONTEXT.action.setSelectAddr([props.data.addrName, props.data.addr]);
    ACONTEXT.action.setAddSelected(true);
    history.goBack();
  };
  return (
    <div>
      <section className="so_section section">
        <div className="so_header">
          <p className="so_name">{props.data.addrName}</p>
          {props.data.primary && <p className="so_origin">기본</p>}
        </div>
        <div className="so_main">
          <p className="so_address">{props.data.addr}</p>
        </div>
        <div className="so_btn">
          <button className="so_edit">수정</button>
          <button
            className="so_select"
            onClick={() => {
              selectItem();
            }}
          >
            선택
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddressOption;
