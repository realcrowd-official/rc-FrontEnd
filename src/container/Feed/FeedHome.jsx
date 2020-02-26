import React, { useState, useContext, useEffect } from 'react';
import FeedCarousel from '@/components/FeedCarousel';
import FeedCardView from '@/components/FeedCardView';
import Footer from '@/components/Footer';

import HABContext from '@/context/headerAndBottom';
import Axios from 'axios';

const FeedHome = () => {
  const { action } = useContext(HABContext);
  const [listArray, setListArray] = useState([]);

  // const url = 'http://localhost:7777/api/feed/crud';
  const url = 'http://3.135.237.171:7777/api/feed/crud';

  useEffect(() => {
    action.setHeaderType('regular');
    action.setBottomType('true');
    action.setPath('home');
  });

  useEffect(() => {
    Axios.get(url).then(res => {
      res.data.listArray.map(Data => {
        setListArray(listArray => [...listArray, Data]);
      });
    });
  }, []);
  return (
    <div className="home_body">
      <FeedCarousel />
      {listArray.map(Data => {
        return (
          <div>
            <FeedCardView value={Data} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default FeedHome;
