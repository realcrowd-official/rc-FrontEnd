import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './container/Home'
import BottomSheet from './container/bottomsheet'
import { TabProvider } from './context/tab';

function App() {
  return (
    <>
      <TabProvider>
        <Home/>
      </TabProvider>
      <BottomSheet/>
    </>
  );
}

export default App;
