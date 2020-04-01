import React, { useState, useContext, useEffect } from 'react';
import FeedCarousel from '@/components/FeedCarousel';
import FeedCardView from '@/components/FeedCardView';
import Footer from '@/components/Footer';

import HABContext from '@/context/headerAndBottom';

import { fHAxios } from '@/lib/api';

const FeedHome = () => {
  const { action } = useContext(HABContext);
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('home');
  }, []);

  useEffect(() => {
    async function axios() {
      const ans = await fHAxios();
      ans.data.listArray.map(Data => {
        setListArray(listArray => [...listArray, Data]);
      });
    }
    axios();
  }, []);
  return (
    <div className="home_body">
      <FeedCarousel />
      {listArray.map((Data, index) => {
        return (
          <div key={index}>
            <FeedCardView value={Data} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default FeedHome;
