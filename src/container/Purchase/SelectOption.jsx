import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AddressOption from '@/components/purchase/AddressOption';

import HABContext from '@/context/headerAndBottom';

const SelectOption = () => {
  const HAB = useContext(HABContext);
  const history = useHistory();

  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
    HAB.action.setNotiType('add');
    HAB.action.setAddType(history.location.state.kind);
  }, []);
  return (
    <div className="home_body_nobn">
      <AddressOption />
    </div>
  );
};

export default SelectOption;
