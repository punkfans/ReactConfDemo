import React, { useState } from 'react';
import './App.css';
import Hooks from './Hooks/hooks';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import LazySuspense from './LazySuspense/lazySuspense';
import BackgroundLoading from './BackgroundLoading/backgroundLoading';

function App() {

  const [tabVallue, setTabValue] = useState(0);
  const changeTab = (event, value) => {
    setTabValue(value);
  };

  const renderBody = () => {
    switch (tabVallue) {
      case 0:
        return <Hooks />;
      case 1:
        return <LazySuspense />;
      case 2:
        return <BackgroundLoading />;
      default:
        return null;
    }
  };

  return (
    <div className="appContainer">
      <AppBar position="static">
        <Tabs value={tabVallue} onChange={changeTab}>
          <Tab label="Hooks" />
          <Tab label="Lazy Suspense" />
          <Tab label="Background Loading" />
        </Tabs>
      </AppBar>
      <div className="bodyContainer">
        { renderBody() }
      </div>
    </div>
  );
}

export default App;
