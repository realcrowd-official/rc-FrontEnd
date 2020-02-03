import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ProjectHome from './container/ProjectHome'
import BottomNav from './container/BottomNav'
import { TabProvider } from './context/tab';
import { HeaderProvider } from './context/header';
import { BottomProvider } from './context/bottom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FeedHome from './container/FeedHome';
import Header from './container/Header';
import MyPageHome from './container/MyPageHome';
import FundingDetail from './container/fundingDetail';

function App() {
  return (
    <Router>
      <HeaderProvider>
        <BottomProvider>
          <Header/>
            <Switch>
                <Route exact path="/">
                  <FeedHome/>
                </Route>
                <Route path="/project" children={
                  <TabProvider>    
                    <ProjectHome/>
                </TabProvider>
                }/>
                <Route path="/profile" children={
                  <MyPageHome/>
                }/>
                <Route path="/funding/detail/:id" children={
                  <FundingDetail/>
                }/>
            </Switch>
            <BottomNav/>
        </BottomProvider>
      </HeaderProvider>
    </Router>
  );
}

export default App;
