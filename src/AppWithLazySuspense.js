import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import { CircularProgress } from '@material-ui/core';
import Hooks from './Hooks/hooks';
import { AppBar, Tabs, Tab } from '@material-ui/core';
//import LazySuspense from './LazySuspense/lazySuspense';

const LazySuspense = lazy(() => {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => import('./LazySuspense/lazySuspense'));
});

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
        return (
          <Suspense fallback={<CircularProgress />}>
            <LazySuspense />
          </Suspense>
        );
      case 2:
        return 'hoho';
    }
  };

  return (
    <div className="appContainer">
      <AppBar position="static">
        <Tabs value={tabVallue} onChange={changeTab}>
          <Tab label="Hooks" />
          <Tab label="Lazy Suspense" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <div className="bodyContainer">
        { renderBody() }
      </div>
    </div>
  );
}

export default App;
