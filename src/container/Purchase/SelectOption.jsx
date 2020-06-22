import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AddressOption from '@/components/purchase/AddressOption';

import HABContext from '@/context/headerAndBottom';
import accountContext from '@/context/account';

import { getAddr } from '@/lib/api';

const SelectOption = ({ match }) => {
  const HAB = useContext(HABContext);
  const ACONTEXT = useContext(accountContext);
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    HAB.action.setBottomType('false');
    HAB.action.setHeaderType('back');
    HAB.action.setNotiType('add');
    HAB.action.setAddType(match.params.kind);
  }, []);

  useEffect(() => {
    if (ACONTEXT.state.addr.length === 0) {
      async function axios() {
        const ans = await getAddr();
        console.log(ans);

        ACONTEXT.action.setAddr(ans.data.data.address);
        if (ans.data.data.address.length > 0) {
          ans.data.data.address.map((Data) => {
            if (Data.primary && !ACONTEXT.state.addSelected) {
              ACONTEXT.action.setSelectAddr([
                Data.addrName,
                Data.addr,
                Data.primary,
              ]);
            }
          });
        }
      }
      axios();
    } else {
      setData(ACONTEXT.state.addr);
    }
  });
  return (
    <div className="home_body_nobn">
      {data.length == 0 ||
        data.map((Data) => {
          return <AddressOption data={Data} />;
        })}
    </div>
  );
};

export default SelectOption;
