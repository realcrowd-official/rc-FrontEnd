import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ProjectHome from './container/ProjectHome'
import BottomNav from './container/BottomNav'
import { TabProvider } from './context/tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FeedHome from './container/FeedHome';
import Header from './container/Header';

function App() {
  return (
    <Router>
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
      </Switch>
      <BottomNav/>
    </Router>
  );
}

export default App;
