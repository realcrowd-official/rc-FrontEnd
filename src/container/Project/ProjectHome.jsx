import React, { useState, useContext, useEffect } from 'react';
import TabBar from '@/components/TabBar';
import Footer from '@/components/Footer';

import DoingFeed from '@/container/Project/DoingFeed';
import ReservateFeed from '@/container/Project/ReservateFeed';

import TabContext from '@/context/tab';
import HABContext from '@/context/headerAndBottom';
import Axios from 'axios';

const ProjectHome = () => {
  const [doingArray, setDoingArray] = useState([]);
  const [reservateArray, setReservateArray] = useState([]);
  const { state } = useContext(TabContext);
  const habContext = useContext(HABContext);
  // const url = "http://localhost:7777/api/project/crud";
  const url = "http://3.135.237.171:7777/api/project/crud";
  useEffect(() => {
    habContext.action.setHeaderType('regular');
    habContext.action.setBottomType('true');
    habContext.action.setPath('project');
  }, []);

  useEffect(() => {
    Axios.get(url).then(res => {
      res.data.listArray.map(Data => {
        new Date(Data.startDate) < new Date()
          ? setDoingArray([...doingArray, Data])
          : setReservateArray([...reservateArray, Data]);
      });
    });
  }, []);

  return (
    <div className="home_body">
      <TabBar />
      {state.tabMenu === 'doing' ? <DoingFeed value={doingArray} /> : <ReservateFeed value={reservateArray} />}
      <Footer />
    </div>
  );
};

export default ProjectHome;
