import React, { useState, useContext, useEffect } from 'react';
import TabBar from '@/components/TabBar';
import Footer from '@/components/Footer';

import DoingFeed from '@/container/Project/DoingFeed';
import ReservateFeed from '@/container/Project/ReservateFeed';

import TabContext from '@/context/tab';
import HABContext from '@/context/headerAndBottom';

import { pHAxios } from '@/lib/api';

const ProjectHome = () => {
  const [doingArray, setDoingArray] = useState([]);
  const [reservateArray, setReservateArray] = useState([]);
  const { state } = useContext(TabContext);
  const habContext = useContext(HABContext);

  const separateArray = async array => {
    await array.map(Data => {
      new Date(Data.startDate) < new Date()
        ? setDoingArray(doingArray => [...doingArray, Data])
        : setReservateArray(reservateArray => [...reservateArray, Data]);
    });
  };

  useEffect(() => {
    habContext.action.setHeaderType('regular');
    habContext.action.setBottomType('true');
    habContext.action.setPath('project');
  }, []);

  useEffect(() => {
    async function axios() {
      const ans = await pHAxios();
      if (ans.data.statusCode == 200) {
        await separateArray(ans.data.listArray);
      }
    }
    axios();
  }, []);

  return (
    <div className="home_body">
      <TabBar />
      {state.tabMenu === 'doing' ? (
        <DoingFeed value={doingArray} />
      ) : (
        <ReservateFeed value={reservateArray} />
      )}
      <Footer />
    </div>
  );
};

export default ProjectHome;
