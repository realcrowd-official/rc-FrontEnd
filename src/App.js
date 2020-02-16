import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { TabProvider } from './context/tab';
import { HABProvider } from './context/headerAndBottom';
import { AuthProvider } from './context/auth';
import { BSProvider } from './context/bottomSheet';

import ScrollToTop from './components/misc/ScrollToTop';

import ProjectHome from './container/Project/ProjectHome';
import BottomNav from './container/BottomNav';
import FeedHome from './container/Feed/FeedHome';
import Header from './container/Header';
import MyPageHome from './container/MyPageHome';
import FundingDetail from './container/FundingDetail/FundingDetail';
import SignUp from './container/Account/SignUp';
import SignIn from './container/Account/SignIn';

import Error from './pages/Error';

function App() {
  return (
    <Router>
      <AuthProvider>
        <HABProvider>
          <BSProvider>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* <ScrollToTop /> */}
                <FeedHome />
              </Route>
              <Route
                path="/project"
                children={
                  <TabProvider>
                    {/* <ScrollToTop /> */}
                    <ProjectHome />
                  </TabProvider>
                }
              />
              <Route path="/profile" children={<MyPageHome />} />

              <Route
                path="/funding/detail/:id"
                children={
                  <TabProvider>
                    {/* <ScrollToTop /> */}
                    <FundingDetail />
                  </TabProvider>
                }
              />
              <Route path="/signUp" children={<SignUp />} />
              <Route path="/signIn" children={<SignIn />} />
              <Route path="*" component={Error} />
            </Switch>
            <BottomNav />
          </BSProvider>
        </HABProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
