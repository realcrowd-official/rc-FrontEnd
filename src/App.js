import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './container/Home'
import BottomSheet from './container/Bottomsheet'
import { TabProvider } from './context/tab';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Feed/> */}
        </Route>
        <Route path="/project" children={
          <TabProvider>
            <Home/>
          </TabProvider>
        }/>
      </Switch>
      <BottomSheet/>
    </Router>
  );
}

export default App;
