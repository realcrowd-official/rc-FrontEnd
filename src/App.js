import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { TabProvider } from './context/tab';
import { HABProvider } from './context/headerAndBottom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import ProjectHome from './container/Project/ProjectHome';
import BottomNav from './container/BottomNav';
import FeedHome from './container/Feed/FeedHome';
import Header from './container/Header';
import MyPageHome from './container/MyPageHome';
import FundingDetail from './container/FundingDetail';
import SignUp from './container/Account/SignUp';

function App() {
  return (
    <Router>
      <HABProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <FeedHome />
          </Route>
          <Route
            path="/project"
            children={
              <TabProvider>
                <ProjectHome />
              </TabProvider>
            }
          />
          <Route path="/profile" children={<MyPageHome />} />
          <Route path="/funding/detail/:id" children={<FundingDetail />} />
          <Route path="/signUp" children={<SignUp/>}/>
        </Switch>
        <BottomNav />
      </HABProvider>
    </Router>
  );
}

export default App;
