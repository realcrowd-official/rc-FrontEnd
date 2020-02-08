import React, { useState, useContext, useEffect } from 'react';
import TabBar from '../../components/TabBar';
import Footer from '../../components/Footer';

import DoingFeed from './DoingFeed';
import ReservateFeed from './ReservateFeed';

import TabContext from '../../context/tab';
import HABContext from '../../context/headerAndBottom';

const ProjectHome = () => {
  const { state } = useContext(TabContext);
  const habContext = useContext(HABContext);
  useEffect(() => {
    habContext.action.setHeaderType('regular');
    habContext.action.setBottomType('true');
    habContext.action.setPath('project');
  });

  return (
    <div className="home_body">
      <TabBar />
      {state.tabMenu === 'doing' ? <DoingFeed /> : <ReservateFeed />}
      <Footer />
    </div>
  );
};

export default ProjectHome;
