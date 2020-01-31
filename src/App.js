import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ProjectHome from './container/ProjectHome'
import BottomSheet from './container/Bottomsheet'
import { TabProvider } from './context/tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FeedHome from './container/FeedHome';

function App() {
  return (
    <Router>
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
      <BottomSheet/>
    </Router>
  );
}

export default App;
